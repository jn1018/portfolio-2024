import React, {useEffect, useState} from 'react';

// ReactRouter import for main navigation
import {Link} from 'react-router-dom';
import HomeAnimation from './HomeAnimation';

// Import cookies 
import { useCookies } from 'react-cookie';

// Import GSAP and ScrollTrigger plugin
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Begin Homepage main export function
export default function Homepage() {

  const [visitCookie, setVisitCookie] = useCookies(false); // set cookie to detect if scroll animation already ran
  const [scroll, setScroll] = useState(false); // check if user has scrolled
  const [entImageIndex, setEntImageIndex] = useState(1); // set image iterator
  const [animAppearance, setAnimAppearance] = useState("block"); // hide animation after completion

  useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(true);
    });
  });
  // End useEffect

  const body = document.querySelector('body');

  useGSAP(() => {
    const stop = 21; // number of images to display on scroll
    var i = 1;

    ScrollTrigger.create({
      markers: false,
      trigger: body,
      start: 'top',
      onUpdate: self => {
        if (self.direction === 1) {
          i = i + 1;
          setEntImageIndex(i);
          if (i === stop) {
            setAnimAppearance("none");
            setVisitCookie('scrollRan', true);
          }
        } else {
          i = i - 1;
          setEntImageIndex(i);
        }
      },
      onLeaveBack: () => {
        setEntImageIndex(1);
      },
    });

    const tl = gsap.timeline();
    tl.to('#ScrollPrompt', {repeat: -1, y: -15, yoyo: true});
    tl.fromTo(".view-selected-cta", 
      {width: "0%", opacity: 0}, 
      {width: "100%", opacity: 1, transformOrigin: "left", duration: 2, ease: "power4.out"}
    );
  });
  // End useGSAP

    return (
        <>
          {visitCookie.scrollRan ?
            <>
                <div className="title-compartment">
                  <h1 className="drawn-billboard">Drawn.</h1>
                  <Link to="/projects-design" className="cta-link">
                      <div id="ViewProjectsCTA" className="view-selected-cta">View Selected Projects</div>
                  </Link>
                </div>
                
                <HomeAnimation />
            </>
          :
            <>
              <div className="draw-jacket">
                  <aside id="ScrollPrompt" role="alert" className={scroll ? "scroll-prompt-fade" : ""}>
                  <p>Scroll down<br />to draw me</p>
                  </aside>
                  <img 
                    style={{display: animAppearance}} 
                    id="ScrollIntroAnim" 
                    alt="on scroll animation intro" 
                    src={"./anim-images/intro/drawintro_" + entImageIndex + ".svg"} 
                  />
                </div>
            </>
          }
        </>
        
    )
}