// ReactRouter import for main navigation
import React, {useEffect, useState} from 'react';
import {motion as m} from 'framer-motion';
import {Link} from 'react-router-dom';
import drawntitle from '../assets/images/drawn-title-heading.svg';
import codingdesk from '../assets/images/sitting-at-desk-pencil.svg';
import viewselected from '../assets/images/view-selected-projects-graphic.svg';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Homepage() {

    const ImageGroup = () => {
      const [imageIndex, setImageIndex] = useState(0);
      useEffect(() => {
        var i = 0;
        var interval = setInterval(increment, 300);
        const stop = 20;

        function increment() {
          i = i + 1;
          if (i === stop) {
            i = 0;
          }
          setImageIndex(i);
        }
      }, []);

      return (
        <>
          <img className="anim-container" src={"./anim-images/typing_" + imageIndex + ".png"} />
        </>
      );
    };

    useGSAP(() => {
      const tl = gsap.timeline({ repeat: -1 });
      const viewProj = document.getElementById("ViewProjectsCircle");
      tl.to('.view-selected-circle', {
        rotation:"+=360", 
        duration: 8, 
        ease: 'none'
      });
      viewProj.addEventListener("mouseover", (e) => {
        gsap.to('.view-selected-circle', {
          scale: 1.15,
          duration: 0.5,
        });
      });
      viewProj.addEventListener("mouseout", (e) => {
        gsap.to('.view-selected-circle', {
          scale: 1,
          duration: 0.3,
          ease: "power1.in"
        });
      });
    });

    return (
        <>
            <m.img src={drawntitle} alt="Drawn" className="drawn-title" 
              key="drawn-home"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.85, transition: {duration: 0.5} }}
              exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
            />
            <Link to="/projects-design" 
                className="cta-link" 
            >
              <img 
                to="/projects-design" 
                src={viewselected} 
                id="ViewProjectsCircle"  
                className="view-selected-circle" 
                alt="View Selected Projects" 
              />
            </Link>
          
            <img src={codingdesk} className="coding-desk" alt="Sitting at the desk coding and drinking coffee" />
        </>
    )
}