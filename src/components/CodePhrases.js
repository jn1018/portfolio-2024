import React, {useState, useRef, useEffect} from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// Begin Phrases definitions and function, also uses interval in useEffect block
const randNum = Math.floor(Math.random() * 3);

function Phrases(props) {
  // Long Prases 37 or 38 characters (includes spaces)
  const long_phrases = [
    "<?php function checkToken(token) { ?>", 
    "public function isValid(Token $token)",
    "<script src='base.js' async></script>",
    "mysql> CREATE procedure new_employee(",
  ];
  // Short Prases 26 or 27 characters (includes spaces)
  const short_phrases = [
    "import React * from 'react'", 
    "link rel='canonical' href=",
    "block mt-4 sm:inline-block",
    "label htmlFor='namedInput'",
  ];
  return (
    <>
        { props.type === 'long' ? long_phrases[props.randomNumber] : short_phrases[props.randomNumber] }
    </>
  );
}

export default function CodePhrases() {

  const [num12, setNum12] = useState(randNum);
  const [num8, setNum8] = useState(randNum);
  const tl = useRef();
  const interval12 = useRef();
  const interval8 = useRef();

  useEffect(() => {
    clearTimer12();
    clearTimer8();
    function handleTimer12() {
      interval12.current = setInterval(() => {
        setNum12((Math.floor(Math.random() * 4)));
      }, 12600);
    }
    function clearTimer12() {
      clearInterval(interval12.current);
    }
    function handleTimer8() {
      interval8.current = setInterval(() => {
        setNum8((Math.floor(Math.random() * 4)));
      }, 9700);
    }
    function clearTimer8() {
      clearInterval(interval8.current);
    }
    handleTimer12();
    handleTimer8();
  });

  useGSAP(() => {

    function playTextAnimation(pos, typewidth, steps, index, typespeed, yspeed, repeatDelay, fadeSpeed, delayStart) {

      tl.current = gsap.timeline({
        paused: true, 
        delay: 12,
        defaults: {ease: "none"}
      });
      // containing div moving up the page 
      tl.current.to(".wrap-" + index + "", yspeed, {y: pos, repeat: -1, delay: delayStart});
      tl.current.to(".text-container-" + index + "", fadeSpeed, {repeat: -1, yoyo: true, opacity: "1", delay: delayStart}, 0);
  
      // letter animation
      tl.current.fromTo(".line-" + index + "", typespeed, { width: "0" }, {
        width: typewidth, 
        ease: "steps(" + steps + ")",
        repeat: -1,
        repeatDelay: repeatDelay,
        delay: delayStart
      }, 0);
      // text cursor animation
      tl.current.fromTo(".line-" + index + "", 0.5, {
        "border-right-color": "#9E906B"
      }, {
        "border-right-color": "#9E906B",
        repeat: -1,
        ease: "steps(" + steps + ")"
      }, 0);
      
      tl.current.play();
    }
    
    // playTextAnimation(pos, typewidth, steps, index, typespeed, yspeed, repeatDelay, fadeSpeed, delayStart)

    playTextAnimation("-600px", "20.28em", 34, 1, 8, 12, 4, 6, 1); // line 1 (php)
    playTextAnimation("-400px", "10.18em", 17, 2, 4, 8, 4, 4, 0); // line 2 (docker)
    playTextAnimation("-400px", "14.68em", 27, 3, 6, 10, 4, 5, 0); // line 3 (react import)
    playTextAnimation("-450px", "12.18em", 17, 4, 3, 8, 5, 4, 3); // line 4 (react const)
    playTextAnimation("-450px", "9.18em", 17, 5, 3, 8, 5, 4, 3); // line 5 (media print)

  }); 

  return (
    <div>

      <div className="montage-text wrap-1">
        <div className="text-container-1">
          <p className="line-1 type-box anim-typewriter"><Phrases type="long" randomNumber={num12} /></p>
        </div>
      </div>
      
      <div className="montage-text wrap-2">
        <div className="text-container-2">
          <p className="line-2 type-box anim-typewriter">docker compose up</p>
        </div>
      </div>

      <div className="montage-text wrap-3">
        <div className="text-container-3">
          <p className="line-3 type-box anim-typewriter"><Phrases type="short" randomNumber={num8} /></p>
        </div>
      </div>

      <div className="montage-text wrap-4">
        <div className="text-container-4">
          <p className="line-4 type-box anim-typewriter">const [field, setField]</p>
        </div>
      </div>

      <div className="montage-text wrap-5">
        <div className="text-container-5">
          <p className="line-5 type-box anim-typewriter">@media print &#x7B;</p>
        </div>
      </div>
      
    </div>
  )

}