// Import React state
import React, {useState} from "react";

// ReactRouter import for main navigation
import {Link} from 'react-router-dom';
import {AnimatePresence, motion, useCycle} from 'framer-motion';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

/* The following plugin is a Club GSAP perk */
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

// Disable body scrolling when project modal is open
const setHidden = () => {
  let dimmer = document.getElementById("dimmer");
  if (document.body.style.overflow !== "hidden") {
    document.body.style.overflow = "hidden";
    dimmer.style.visibility = "visible";
    dimmer.style.opacity = 0.5;
  } else {
    document.body.style.overflow = "visible";
    dimmer.style.opacity = 0;
    dimmer.style.visibility = "hidden";
  }
};

const links = [
  { name: "Home", img: "/images/home-text.svg", to: "/", id: 1 },
  { name: "About", img: "/images/about-text.svg", to: "/about", id: 2 },
  { name: "Projects", img: "/images/projects-text.svg", to: "/projects-design", id: 3 },
  { name: "Contact", img: "/images/contact-text.svg", to: "/contact", id: 5 }
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

// Disable body scrolling when project modal is open
const setOverflow = () => {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "visible";
  }
};

export default function MainNav() {
  
  const [style, setStyle] = useState("closed");
  const [open, cycleOpen] = useCycle(false, true);

  const changeStyle = () => {
    if (style !== "closed") {
      setStyle("closed");
      animateOpen();
    } else {
      setStyle("open");
      animateClosed();
    }
  };

  useGSAP(() => {
    var tl = gsap.timeline();
    // Initial hamburger menu animation on page load
    tl.set("#b-one, #b-two, #b-three", {visibility:"visible"});
    tl.from("#b-one, #b-two, #b-three", {drawSVG:0, stagger: 0.7, duration: 0.8, ease:"power1.inOut"});
  });

  function animateClosed() {
    var tl = gsap.timeline();
    tl.to("#b-one", .2, {y:'11px', rotationZ:45, transformOrigin: '50% 50%'}, 'rotate');
    tl.to("#b-two", .2, {opacity: 0});
    tl.to("#b-three", .2, {y:'-11px', rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate');
  }
  function animateOpen() {
    var tl2 = gsap.timeline();
    tl2.to("#b-one", .2, {y:'0', rotationZ:0, transformOrigin: '50% 50%'}, 'rotate');
    tl2.to("#b-two", .2, {opacity: 1});
    tl2.to("#b-three", .2, {y:'0', rotationZ:0, transformOrigin: '50% 50%'}, 'rotate');
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            id="menu-aside" 
            initial={{width: 0}}
            animate={{width: 300}}
            exit={{
              width: 0,
              transition: {delay: 0.2, duration: 0.3}
            }}
          >
            <motion.div
              className="nav-container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({name, img, to, id}) => (
                <Link
                  key={id}
                  to={to}
                  className="nav-item" 
                  style={{display: "block"}} 
                  onClick={function(){ cycleOpen(); changeStyle(); setOverflow();}}
                >
                  {name}
                </Link>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className={`btn-container ${style}`} onClick={function(){ cycleOpen(); changeStyle();}}></div>
      <svg id="button-lines" version="1.1" xmlns="http://www.w3.org/2000/svg" width="47.27" height="30.16" viewBox="0 0 47.27 30.16">
        <polyline id="b-one" points="0 2.37 5.5 2.37 11.32 2.7 16.49 2.37 21.99 2.37 27.59 2 32.99 2.37 38.48 2.37 43.98 2.37"/>
        <polyline id="b-two" points="0 14.47 5.5 14.47 11 14.47 16.49 14.47 21.99 14.85 27.49 14.47 32.99 14.47 38.48 14.47 47.19 14.11"/>
        <polyline id="b-three" points="0 27.66 5.67 27.66 11.4 27.16 17.01 27.66 22.68 27.66 28.39 28.15 34.02 27.66 39.7 27.66 44.43 27.33"/>
      </svg>
      <div className="button-background"></div>
    </>
  );
}