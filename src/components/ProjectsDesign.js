import React, {useState, useEffect} from 'react';

import PanelComponent from "./ProjectsPanelComponent";
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";

export default function ProjectsDev() {

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('#ScrollPrompt', {repeat: -1, y: -15, yoyo: true});
  });

  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(true);
    });
  }, []);

    return (
        <>
          <div id="dimmer"></div>
          <aside id="ScrollPrompt" role="alert" className={scroll ? "scroll-prompt-fade" : ""}>
            <p>Scroll down for more projects</p>
          </aside>
          <PanelComponent projectType="3" />
        </>
    );
}
