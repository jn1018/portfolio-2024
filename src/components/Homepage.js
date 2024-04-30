// ReactRouter import for main navigation
import {motion, AnimatePresence} from 'framer-motion';
import drawntitle from '../assets/images/drawn-title.svg';
import codingdesk from '../assets/images/sitting-at-desk-placeholder.svg';
import ProjectTypes from "./ProjectTypes";

export default function Homepage() {
    return (
        <>
            <AnimatePresence>
                <motion.img src={drawntitle} alt="Drawn" className="drawn-title" 
                  key="drawn-home"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.85 }}
                  exit={{ x: 100, opacity: 0 }}
                />
                <motion.h1 className="feature-heading" 
                  key="feature-h1"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                >
                Art, design, and development portfolio of Jeff Nishihira
                </motion.h1>
            </AnimatePresence>
            <ProjectTypes />
            <img src={codingdesk} className="coding-desk" alt="Sitting at the desk coding and drinking coffee" />
        </>
    )
}