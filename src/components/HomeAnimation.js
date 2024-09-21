// Import React and motion
import React, {useEffect, useState} from 'react';
import {motion as m} from 'framer-motion';

import CodePhrases from './CodePhrases';
// import viewselected from '../assets/images/view-selected-projects-graphic.svg';
import animbackground from '../assets/images/entrance-background.png';
import tablebackground from '../assets/images/table-background.png';

// Begin Homepage Animation function
export default function HomeAnimation() {

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
            if (i === 4) {
                i = 1;
            }
            // 36 cycles
            if (cycles === 36) {
                setAnimCycles("tabletype");
            }
            setTableImageIndex(i);
            cycles = cycles + 1;
            }
            return () => clearInterval(interval);
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
            const stop = 98;

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
            return () => clearInterval(interval);
        }, []);

        return (
            <>
            <img 
                id="AnimContainer-Table5" 
                className="typing-blended" 
                alt="typing loop animation" 
                src={"./anim-images/homepage/typing/typing_" + typeImageIndex + ".svg"} 
            />
            </>
        );
    };
    // End Animation functions

    return (
        <>
            <ImageGroupEntrance />
            <ImageGroupTypeLoop />
            <m.img src={animbackground} 
            key="anim-background1"
            alt="Typing character cover" 
            className="entrance-bg" 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: {duration: 0.5} }}
            exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
            />
            <ImageGroupTable />
            <m.img src={tablebackground} 
            key="table-background1"
            alt="Table Animation Cover" 
            className="table-bg" 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: {duration: 0.5} }}
            exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
            />
            <CodePhrases />
        </>
    );

}