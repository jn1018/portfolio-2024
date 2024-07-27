import {motion as m} from 'framer-motion';
import codingdesk from '../assets/images/sitting-at-desk-pencil.svg';

export default function About() {
    return (
        <>
        <m.h1 
            key="about-header"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: {duration: 0.5} }}
            exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
        >This was NOT written with AI.</m.h1>
        <m.section 
            key="about-copy"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: {duration: 0.5} }}
            exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
            class="about-copy"
        >
        <p>I am a Chicago-based designer, developer, animator, and artist. As a computer animation 
major at Columbia College Chicago, I crawled into a bag labeled "Macromedia Flash", became a master at it while working 
several early jobs as a designer and animation specialist, and then Steve Jobs destroyed the bag.</p>
<p>After escaping the bag, I became a full-time front-end and LAMP-stack developer.</p>
<p>Since then, I've been the lead designer and developer at the Museum of Contemporary Art Chicago, built several 
large-scale applications, created 3D and traditional animations for video projects, built and maintained the 
entire web presence for National Louis University, became a software engineer and team lead at the International
Code Council, and learned how to play guitar chords that don't require any barring.</p>
        </m.section>
        <img src={codingdesk} className="coding-desk" alt="Sitting at the desk coding and drinking coffee" />
        </>
    )
}
