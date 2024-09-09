import React, {useState, useRef, useCallback} from "react";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

// Import Individual project pages
import Portfolio from "./projects/Portfolio";
import ICC from "./projects/ICC";
import PPP from "./projects/PPP";
import NLU from "./projects/NLU";
import Chipotle from "./projects/Chipotle";
import ANCR from "./projects/ANCR";
import IAS from "./projects/IAS";
import DCApp from "./projects/DCApp";
import Mearra from "./projects/Mearra";
import NLUEaglesLogo from "./projects/NLUEaglesLogo";
import CCFF from "./projects/CCFF";


export default function ProjectDetails(props) {
    // Set previous and next project navigation
    const [selectedProject, setSelectedProject] = useState(props.project);
    // Set scroll position references
    const myRef = useRef();
    const [scrollTop, setScrollTop] = useState(0);

    function nextProject() {
        let next = (selectedProject >= 11) ? 1 : selectedProject + 1;
        return setSelectedProject(next);
    }

    function prevProject() {
        let prev = (selectedProject <= 1) ? 11 : selectedProject - 1;
        return setSelectedProject(prev);
    }

    function scrollBackToTop() {
        let modalDiv = document.getElementById('projectDetailPanel');
        modalDiv.scrollTop = 0;
    }

    // Handle scroll and update y position state, show or hide bullet points
    const onScroll = useCallback(() => {
        const projImage2 = document.querySelector('.two');
        const projImage3 = document.querySelector('.three');

        setScrollTop(myRef.current.scrollTop);
        projImage2.style.top = 500 -(myRef.current.scrollTop * 0.8) + 'px';
        projImage3.style.top = 1000 -(myRef.current.scrollTop * 0.4) + 'px';
    }, [setScrollTop]);

    useGSAP(() => {
        // Add simple slide up/fade-in animation to project copy div (fixed-copy)
        const tl = gsap.timeline(); 
        tl.fromTo(".fixed-copy", {y: 175}, {y: 0, duration: 1});
    });

    return (
        <>
        <div 
            id="projectDetailPanel" 
            className="project-details" 
            ref={myRef} 
            onScroll={onScroll}
        >
            <div className={`project-box ${selectedProject === 1 ? "display" : ""}`} id="project-1">
                <Portfolio />
            </div>
            <div className={`project-box ${selectedProject === 2 ? "display" : ""}`} id="project-2">
                <ICC />
            </div>
            <div className={`project-box ${selectedProject === 3 ? "display" : ""}`} id="project-3">
                <PPP />
            </div>
            <div className={`project-box ${selectedProject === 4 ? "display" : ""}`} id="project-4">
                <Chipotle />
            </div>
            <div className={`project-box ${selectedProject === 5 ? "display" : ""}`} id="project-5">
                <NLU />
            </div>
            <div className={`project-box ${selectedProject === 6 ? "display" : ""}`} id="project-6">
                <DCApp />
            </div>
            <div className={`project-box ${selectedProject === 7 ? "display" : ""}`} id="project-7">
                <IAS />
            </div>
            <div className={`project-box ${selectedProject === 8 ? "display" : ""}`} id="project-8">
                <ANCR />
            </div>
            <div className={`project-box ${selectedProject === 9 ? "display" : ""}`} id="project-9">
                <Mearra />
            </div>
            <div className={`project-box ${selectedProject === 10 ? "display" : ""}`} id="project-10">
                <NLUEaglesLogo />
            </div>
            <div className={`project-box ${selectedProject === 11 ? "display" : ""}`} id="project-11">
                <CCFF />
            </div>
        </div>
        <div id="projectDetailNav">
            <button class="project-nav previous" onClick={() => {scrollBackToTop(); prevProject()}}>&lArr;</button>
            <button class="project-nav next" onClick={() => {scrollBackToTop(); nextProject()}}>&rArr;</button>
        </div>
        </>
    );
}