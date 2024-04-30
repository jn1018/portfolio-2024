import {motion, AnimatePresence} from 'framer-motion';

export default function Contact() {
    return (
        <>
        <AnimatePresence>
            <motion.h1 
                key="drawn"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
            >Contact</motion.h1>
            <motion.section 
                key="drawn"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                class="about-copy"
            >
            Email: <a href="mailto:jeffnishihira@gmail.com">jeffnishihira@gmail.com</a>
            </motion.section>
        </AnimatePresence>
        </>
    )
}
