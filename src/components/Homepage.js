import { motion, AnimatePresence } from "framer-motion";
import drawntitle from '../assets/images/drawn-title.svg';

function Homepage() {
    return (
        <>
            <AnimatePresence>
                <motion.img src={drawntitle} alt="Drawn" className="drawn-title" 
                  key="drawn"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                />
                <motion.h1 className="feature-heading" 
                  key="feature-h1"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                >
                Art, design, and development portfolio of Jeff Nishihira
                </motion.h1>
            </AnimatePresence>
        </>
    )
}

export default Homepage;