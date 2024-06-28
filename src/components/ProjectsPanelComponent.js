import React, {useRef, useState, useEffect} from "react";
import axios from "axios";
import {motion, AnimatePresence, useTransform, useScroll, useCycle} from "framer-motion";

// Import Projects component
import ProjectDetails from "./ProjectDetails";

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
  
  const x = useTransform(scrollYProgress, [0, 1], ["0", "-95%"]);
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [open, cycleOpen] = useCycle(false, true);
  const [project, setProject] = useState(1);

  // Fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("http://portfolio-2024-API.local/projects/read_by_type.php", {
        params: {
          type: props.projectType
        }
      });
      setData(response.data.records);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);
/*
  useGSAP(() => {
    var tl = gsap.timeline();
    // First few lines of each project thumbnail to animate
    tl.set(".icc-lines", {visibility:"visible"});
    tl.from(".icc-lines", 
      { drawSVG:0, 
        stagger: 0.2, 
        duration: 0.4, 
        ease:"power1.inOut"
      });
  });
*/

  return (
    <>
    <section ref={targetRef} className="panel-outer-layout">
      <div className="panel-container">
        <motion.div style={{x}} 
          ref={inputRef}
          className="panel-inner-container">

          {data.map((post) => (
            <div key={post.id}
              className={"panel project_" + post.id}
              >
 
              <div
                style={{
                  backgroundImage: `url(${post.image_path_1})`, 
                  zIndex: "3"
                }}
                className="panel-image-lines" 
                onClick={function(){ cycleOpen(); setHidden(); setProject(post.id);}} 
              ></div>
              <div style={{
                backgroundImage: `url(${post.image_path_2})`, 
                zIndex: "2"
                }} 
                className="panel-image"></div>
              <div className="panel-info">
                <p className="panel-info-title">
                  {post.name}
                </p>
                <p className="panel-info-subtitle">
                  <a className="panel-project-link" href={post.project_url} target="_blank">Visit Project</a>
                </p>
              </div>
            </div>
          ))}
          
        </motion.div>
      </div>
    </section>

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
          <button id="project-modal-close" onClick={function(){ cycleOpen(); setHidden()}}>[x]</button>
        </motion.aside>
      )}
    </AnimatePresence>
  </>
  );
};

export default PanelComponent;
