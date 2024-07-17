import React, {useRef, useState} from "react";
import {motion, AnimatePresence, useTransform, useScroll, useCycle} from "framer-motion";

// Import Projects component
import ProjectDetails from "./ProjectDetails";
import projectsdisplaydata from "./ProjectsDisplayData"; 

// Import Animation Lines
import AnimProjectLines from "./AnimProjectLines";

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

const setOpacityZero = () => {
  let iccAnimLines = document.getElementById('AnimationSplash');
  iccAnimLines.style.display = "none";
};

const PanelComponent = (props) => {
  return (
    <>
      <HorizontalScrollCarousel projectType={props.projectType} />
      <div className="panels-bottom"></div>
    </>
  );
};

const HorizontalScrollCarousel = (props) => {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0", "-94%"]);
  const inputRef = useRef(null);
  const animRef = useRef(null);
  const linesRef = useRef(null);
  const [open, cycleOpen] = useCycle(false, true);
  const [project, setProject] = useState(1);
  // const [isloading, setIsloading] = useState(false);

  useGSAP(() => {
      // const tl = gsap.timeline({ });
      const tl = gsap.timeline({ onComplete: setOpacityZero });
      // First few lines of each project thumbnail to animate
      tl.from(".drawn-lines", { 
        drawSVG: 0, 
        duration: 1.5, 
        ease:"power1.out"
      })
      .to(".project_1 .fade-in-lines", {
        opacity: 1,
        duration: 1.5,
        delay: -0.5
      })
      .from(".icc-lines", { 
        drawSVG: 0, 
        duration: 1.5, 
        delay: -0.5,
        ease:"power1.out"
      })
      .to(".project_2 .fade-in-lines", {
        opacity: 1,
        duration: 1.5,
        delay: -0.5
      })
      .from(".ppp-lines", { 
        drawSVG: 0, 
        duration: 1.5, 
        delay: -0.5,
        ease:"power1.out",
      })
      .to(".project_3 .fade-in-lines", {
        opacity: 1,
        duration: 1.5,
        delay: -0.5
      })
      .from(".chipotle-lines", { 
        drawSVG: 0, 
        duration: 1.5, 
        delay: -0.5,
        ease:"power1.out",
      })
      .to(".project_4 .fade-in-lines", {
        opacity: 1,
        duration: 1.5,
        delay: -0.5,
        onComplete: function () {
          gsap.set(".project_1 .fade-in-lines", {clearProps: "opacity"});
          gsap.set(".project_2 .fade-in-lines", {clearProps: "opacity"});
          gsap.set(".project_3 .fade-in-lines", {clearProps: "opacity"});
          gsap.set(".project_4 .fade-in-lines", {clearProps: "opacity"});
          gsap.set(".project_1 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_2 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_3 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_4 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_5 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_6 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_7 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_8 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_9 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
          gsap.set(".project_10 .fade-in-lines", {className:"panel-image-lines fade-in-lines opacity-restore"});
        }
      });
  });

  return (
    <>
    <motion.section 
      ref={targetRef} 
      className="panel-outer-layout"
    >
      <div className="panel-container">

        <div ref={animRef} id="AnimationSplash">
          <AnimProjectLines />
        </div> 

        <motion.div style={{x}} 
          ref={inputRef}
          className="panel-inner-container">

          {projectsdisplaydata.map((post) => (
            <div key={post.id}
              className={"panel project_" + post.id}
              >
              <div
                style={{
                  backgroundImage: `url(${post.image_path_1})`, 
                  zIndex: "3"
                }}
                className="panel-image-lines fade-in-lines" 
                ref={linesRef} 
                onClick={function(){ cycleOpen(); setHidden(); setProject(post.id);}} 
              ></div>
              <div style={{
                backgroundImage: `url(${post.image_path_2})`, 
                zIndex: "2"
                }} 
                className="panel-image">
              </div>
              <div className="panel-info">
                <p className="panel-info-title">
                  {post.name}
                </p>
                <p className="panel-info-subtitle">
                  <a className="panel-project-link" rel="noreferrer" href={post.project_url} target="_blank">Visit Project</a>
                </p>
              </div>
            </div>
          ))}
          
        </motion.div>
      </div>
    </motion.section>

    <AnimatePresence>
      {open && (
        <motion.aside 
          id="modal-aside" 
          initial={{bottom: -500}}
          animate={{bottom: 0}}
          exit={{
            bottom: -500,
            transition: {delay: 0.2, duration: 0.3}
          }}
        >
          <div className="close-spacer" onClick={function(){ cycleOpen(); setHidden()}}></div>
            <ProjectDetails project={project} />
          <button 
            id="project-modal-close" 
            onClick={function(){ cycleOpen(); setHidden()}}
          ></button>
        </motion.aside>
      )}
    </AnimatePresence>
  </>
  );
};

export default PanelComponent;
