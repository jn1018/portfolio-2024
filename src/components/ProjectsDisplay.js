import React, { useRef, useState } from "react";
import projectsdisplaydata from "./ProjectsDisplayData";
import ProjectsPanelComponent from "./ProjectsPanelComponent";
// import { RiArrowDropDownLine } from "react-icons/ri";

/* Import assets */
import '../assets/css/projects-css.css';

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <div className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
};

const ProjectsDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [fixed, setFixed] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    fixed ? setFixed(false) : setFixed(true);
  };

  return (
    <div className={`container ${fixed ? "activefixed" : ""}`}>
      {projectsdisplaydata.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default ProjectsDisplay;
