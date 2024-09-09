import {motion as m} from 'framer-motion';
import codingdesk from '../assets/images/sitting-at-desk-pencil.svg';

export default function Contact() {
    return (
        <>
        <m.h1 
            key="contact-header"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: {duration: 0.5} }}
            exit={{ x: 300, opacity: 0, transition: {duration: 0.5}}}
        >
            Here's how to reach me:
        </m.h1>
        <m.section 
            key="contact-copy"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: {duration: 0.5} }}
            exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
            class="about-copy"
        >
            <p>Email: <a href="mailto:jeffnishihira@gmail.com">jeffnishihira@gmail.com</a></p>
            <p>Phone: 773.350.0546</p>
            <p>LinkedIn: <a 
            href="https://www.linkedin.com/in/jeff-nishihira-17a46915" 
            target="_blank" 
            rel="noreferrer" 
            >www.linkedin.com/in/jeff-nishihira-17a46915</a></p>
        </m.section>
        <img src={codingdesk} className="coding-desk" alt="Sitting at the desk coding and drinking coffee" />
        </>
    )
}
