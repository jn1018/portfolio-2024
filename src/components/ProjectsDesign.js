import PanelComponent from "./ProjectsPanelComponent";
import drawntitle from '../assets/images/drawn-title-heading.svg';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';

export default function ProjectsDev() {

    return (
        <>
          <div id="dimmer"></div>
          <Link to="/">
            <motion.img src={drawntitle} alt="Drawn" className="drawn-title" 
              key="drawn-home"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.85, transition: {duration: 0.5} }}
              exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
            />
          </Link>
          <PanelComponent projectType="3" />
        </>
    );
}
