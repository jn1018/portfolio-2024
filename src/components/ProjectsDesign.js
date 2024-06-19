import PanelComponent from "./ProjectsPanelComponent";
import drawntitle from '../assets/images/drawn-title-heading.svg';
import {motion} from "framer-motion";

export default function ProjectsDev() {

    return (
        <>
          <motion.img src={drawntitle} alt="Drawn" className="drawn-title" 
            key="drawn-home"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 0.85, transition: {duration: 0.5} }}
            exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
          />
          <PanelComponent projectType="3" />
        </>
    );
}
