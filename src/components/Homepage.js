// ReactRouter import for main navigation
import React, {useEffect, useState} from 'react';
import {motion as m} from 'framer-motion';
import {Link} from 'react-router-dom';
import drawntitle from '../assets/images/drawn-title-heading.svg';
import viewselected from '../assets/images/view-selected-projects-graphic.svg';
import animbackground from '../assets/images/entrance-background.png';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Homepage() {

    // Begin Table image group animation
    const ImageGroupTable = () => {
      const [tableImageIndex, setTableImageIndex] = useState(0);
      const [animCycles, setAnimCycles] = useState("table");
      useEffect(() => {
        var i = 1;
        var cycles = 0;
        var interval = setInterval(increment, 120); // 120 ms or .15 s per frame

        function increment() {
          i = i + 1;
          if (i === 3) {
              i = 1;
          }
          // 27 cycles
          if (cycles == 27) {
            setAnimCycles("tabletype");
          }
          setTableImageIndex(i);
          cycles = cycles + 1;
        }
      }, []);

      return (
        <>
          <img 
            id="AnimContainer-Table2" 
            alt="worktable animation" 
            src={"./anim-images/homepage/table/" + animCycles + "_" + tableImageIndex + ".svg"} 
          />
        </>
      );
    };

    // Begin Walk Entrance image group animation
    const ImageGroupEntrance = () => {
      const [entImageIndex, setEntImageIndex] = useState(0);
      const [animAppearance, setAnimAppearance] = useState("block");
      useEffect(() => {
        var i = 1;
        var interval = setInterval(increment, 120); // 120 ms or .72 s per frame
        const stop = 70;

        function increment() {
          i = i + 1;
          if (i === stop) {
            clearInterval(interval);
            setAnimAppearance("none");
          }
          setEntImageIndex(i);
        }
      }, []);

      return (
        <>
          <img 
            style={{display: animAppearance}}
            id="AnimContainer-Table4" 
            alt="walk entrance animation" 
            src={"./anim-images/homepage/entrance/entrance_" + entImageIndex + ".svg"} 
          />
        </>
      );
    };

    // Begin Typing Loop image group animation
    const ImageGroupTypeLoop = () => {
      const [typeImageIndex, setTypeImageIndex] = useState(0);
      useEffect(() => {
        var i = 1;
        var interval = setInterval(increment, 120); // 120 ms or .72 s per frame
        const stop = 7;

        function increment() {
          i = i + 1;
          if (i === stop) {
            i = 1;
          }
          setTypeImageIndex(i);
        }
      }, []);

      return (
        <>
          <img 
            id="AnimContainer-Table5" 
            alt="typing loop animation" 
            src={"./anim-images/homepage/typing/typing_" + typeImageIndex + ".svg"} 
          />
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
      viewProj.addEventListener("mouseover", () => {
        gsap.to('.view-selected-circle', {
          scale: 1.15,
          duration: 0.5,
          ease: "power1.out"
        });
      });
      viewProj.addEventListener("mouseout", () => {
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
            <ImageGroupEntrance />
            <ImageGroupTypeLoop />
            <img src={animbackground} alt="Drawn" className="entrance-bg" 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.85, transition: {duration: 0.5} }}
              exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
            />
            <ImageGroupTable />
            
        </>
    )
}