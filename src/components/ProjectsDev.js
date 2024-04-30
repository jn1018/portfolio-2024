import {motion, AnimatePresence} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import devimages from "./devimages";

export default function ProjectsDev() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <>
        <AnimatePresence>
            <motion.h1
              key="projects-h1"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
            >
                Development Projects
            </motion.h1>
            <motion.div ref={carousel} 
              className="project-carousel" 
              whileTap={{cursor: "grabbing"}}
              key="drawn-projects"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
            >
                <motion.div 
                    drag="x" 
                    dragConstraints={{right: 0, left: -width}} 
                    className="inner-carousel"
                >
                    {devimages.map((devimage) => {
                        return (
                            <motion.div className="item" key={devimage}>
                                <img src={devimage} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </AnimatePresence>
        </>
    )
}
