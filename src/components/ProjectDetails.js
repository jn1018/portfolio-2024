import React, {useState, useRef, useCallback} from "react";

// Import Individual project pages
import Portfolio from "./Portfolio";
import ICC from "./ICC";
import PPP from "./PPP";
import NLU from "./NLU";
import Chipotle from "./Chipotle";
import ANCR from "./ANCR";
import IAS from "./IAS";
import DCApp from "./DCApp";
import Mearra from "./Mearra";
import NLUEaglesLogo from "./NLUEaglesLogo";

export default function ProjectDetails(props) {
    // Set previous and next project navigation
    const [selectedProject, setSelectedProject] = useState(props.project);
    // Set scroll position references
    const myRef = useRef();
    const [scrollTop, setScrollTop] = useState(0);

    function nextProject() {
        let next = (selectedProject >= 10) ? 1 : selectedProject + 1;
        return setSelectedProject(next);
    }

    function prevProject() {
        let prev = (selectedProject <= 1) ? 10 : selectedProject - 1;
        return setSelectedProject(prev);
    }

    function scrollBackToTop() {
        let modalDiv = document.getElementById('projectDetailPanel');
        modalDiv.scrollTop = 0;
    }

    // Handle scroll and update y position state, show or hide bullet points
    const onScroll = useCallback(() => {
        const scrollY = window.scrollY;
        setScrollTop(myRef.current.scrollTop);
    }, [setScrollTop]);

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
        </div>
        <div id="projectDetailNav">
            <button class="project-nav previous" onClick={() => {scrollBackToTop(); prevProject()}}>Previous</button>
            <button class="project-nav next" onClick={() => {scrollBackToTop(); nextProject()}}>Next</button>
        </div>
        </>
    );
}