// ReactRouter import for main navigation
import React, {useEffect, useState} from 'react';
import {motion as m} from 'framer-motion';
import drawntitle from '../assets/images/drawn-title-heading.svg';
import codingdesk from '../assets/images/sitting-at-desk-pencil.svg';
import ProjectTypes from "./ProjectTypes";

export default function Homepage() {

    const ImageGroup = () => {
      const [imageIndex, setImageIndex] = useState(0);
      useEffect(() => {
        var i = 0;
        var interval = setInterval(increment, 300);
        const stop = 20;

        function increment() {
          i = i + 1;
          if (i === stop) {
            i = 0;
          }
          setImageIndex(i);
        }
      }, []);

      return (
        <>
          <p>{imageIndex}</p>
          <img className="anim-container" src={"./anim-images/typing_" + imageIndex + ".png"} />
        </>
      );
    };

    return (
        <>
            <m.img src={drawntitle} alt="Drawn" className="drawn-title" 
              key="drawn-home"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.85, transition: {duration: 0.5} }}
              exit={{ x: 300, opacity: 0, transition: {duration: 0.5} }}
            />
            <ProjectTypes />

            <img src={codingdesk} className="coding-desk" alt="Sitting at the desk coding and drinking coffee" />
        </>
    )
}