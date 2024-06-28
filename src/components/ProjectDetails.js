import React, {useState, useRef, useCallback} from "react";

// Import Individual project pages
import ICC from "./ICC";
import PPP from "./PPP";
import NLU from "./NLU";
import Chipotle from "./Chipotle";
import ANCR from "./ANCR";

export default function ProjectDetails(props) {
    // Set data state
    // const [data, setData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(props.project);

    // Set scroll position references
    const myRef = useRef();
    const [scrollTop, setScrollTop] = useState(0);

    // Handle scroll and update y position state, show or hide bullet points
    const onScroll = useCallback(() => {
        const scrollY = window.scrollY;
        setScrollTop(myRef.current.scrollTop);

        // Set project details bullet points
        let about = document.getElementById('about');
        let roles = document.getElementById('roles');
        let highlight = document.getElementById('highlight');
        let stack = document.getElementById('stack');
        let regions = document.getElementsByClassName('region');

        regions[0].classList.remove("initial");

        if (myRef.current.scrollTop >= 0 && myRef.current.scrollTop <= 400) {
            about.style.opacity = 1;
            regions[0].style.display = 'block';
        } else {
            about.style.opacity = 0.65;
            regions[0].style.display = 'none';
        }

        if (myRef.current.scrollTop >= 401 && myRef.current.scrollTop <= 800) {
            roles.style.opacity = 1;
            regions[1].style.display = 'block';
        } else {
            roles.style.opacity = 0.65;
            regions[1].style.display = 'none';
        }

        if (myRef.current.scrollTop >= 801 && myRef.current.scrollTop <= 1200) {
            highlight.style.opacity = 1;
            regions[2].style.display = 'block';
        } else {
            highlight.style.opacity = 0.65;
            regions[2].style.display = 'none';
        }

        if (myRef.current.scrollTop >= 1201) {
            stack.style.opacity = 1;
            regions[3].style.display = 'block';
        } else {
            stack.style.opacity = 0.65;
            regions[3].style.display = 'none';
        }
    }, [setScrollTop]);

    return (
        <>
        <div className="project-details" ref={myRef} onScroll={onScroll}>
            {(() => {
                switch (props.project) {
                    case 1:
                        return (<ICC />);
                    case 2:
                        return (<PPP />);
                    case 3:
                        return (<NLU />);
                    case 4:
                        return (<Chipotle />);
                    case 7:
                        return (<ANCR />);
                default:
                    return (<ICC />);
                }
            })()}
        </div>
        </>
    );
}