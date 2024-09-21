
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
    
  const [current, setCurrent] = useState(28);

  useEffect(() => {
      // Implementing the setInterval method
      const interval = setInterval(() => {
          setCurrent(current + 1);
      }, 100);

      if (current === 100) {
        clearInterval(interval);
      }

      // Clearing the interval
      return () => clearInterval(interval);
  }, [current]);
      
  return (
    <>
      <div id="preloadBar">
        <img id="preloadFill" src="/images/blank.gif" style={{width: `${current}%`}} /> 
      </div>
    </>
      
  )
}

export default ProgressBar;