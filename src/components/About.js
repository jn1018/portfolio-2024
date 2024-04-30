import {motion, AnimatePresence} from 'framer-motion';
import codingdesk from '../assets/images/sitting-at-desk-placeholder.svg';

export default function About() {
    return (
        <>
        <AnimatePresence>
            <motion.h1 
                key="drawn"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
            >About Me</motion.h1>
            <motion.section 
                key="drawn"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                class="about-copy"
            >
            <p>I am a Chicago-based designer, developer, animator, and artist.
    In January of 2000, I embarked on a career in interactive multimedia and motion graphics. As a computer animation 
    major at Columbia College Chicago, I crawled into a bag labeled "Flash", became a master at it while working 
    several early jobs as a designer and animation specialist, and didn't crawl out for about eight years.</p>
    <p>Fortunately, during this time, I also mastered HTML, CSS, Javascript, and Perl (CGI). I picked up PHP and MySQL 
    while working at my first internship, and eventually became a full-time LAMP-stack developer.</p>
    <p>Since then, I've been the lead designer and developer at the Museum of Contemporary Art Chicago, built several 
    large-scale applications, created 3D and traditional animations for video projects, built and maintained the 
    entire web presence for National Louis University, became a software engineer and team lead at the International
    Code Council, and learned how to play guitar chords that don't require any barring.</p>
            </motion.section>
        </AnimatePresence>
        <img src={codingdesk} className="coding-desk" alt="Sitting at the desk coding and drinking coffee" />
        </>
    )
}
