/* Import React */
import React, {useState, useEffect} from 'react';

/* Import React and framer motion components */
import {Helmet} from "react-helmet";

/* Import cookies */
import { useCookies } from 'react-cookie';

/* Import assets */
import './assets/css/main.css';

/* Import preloaded images list */
import { PRELOADIMAGES } from "./components/PreloadImages";

/* Import main navigation components */
import MainNav from "./components/MainNav";
import AnimatedRoutes from "./components/AnimatedRoutes";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [imgsLoaded, setImgsLoaded] = useState(false); // get images for preload
  const [entImageIndex, setEntImageIndex] = useState(1); // set image iterator
  const [animAppearance, setAnimAppearance] = useState("block"); // hide animation after completion
  const [visitCookie, setVisitCookie] = useCookies(false); // set cookie to detect if scroll animation already ran
  const [scroll, setScroll] = useState(false); // check idf user has scrolled

  useEffect(() => {
    // Begin preload function
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 1 second to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 1000);

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(PRELOADIMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))

    window.addEventListener("scroll", () => {
      setScroll(true);
    });

  }, []);

  const body = document.querySelector('body');

    useGSAP(() => {
      const stop = 21; // number of images to display on scroll
      var i = 1;
  
      ScrollTrigger.create({
        markers: false,
        trigger: body,
        start: 'top',
        onUpdate: self => {
          if (self.direction === 1) {
            i = i + 1;
            setEntImageIndex(i);
            if (i === stop) {
              setAnimAppearance("none");
              setVisitCookie('scrollRan', true);
            }
          } else {
            i = i - 1;
            setEntImageIndex(i);
          }
        },
        onLeaveBack: () => {
          setEntImageIndex(1);
        },
      });

      const tl = gsap.timeline();
      tl.to('#ScrollPrompt', {repeat: -1, y: -15, yoyo: true});
    });


  return (
    <>
    <Helmet>
        <title>Drawn ~ Art, Design and Development portfolio of Jeff Nishihira</title>
        <link rel="stylesheet" href="https://use.typekit.net/hvj7zun.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        </link>
        <link rel="preload" href="/fonts/FestivoLCSketch2.woff2" as="font" crossorigin></link>
        <link rel="preload" href="/fonts/FestivoLCWood.woff2" as="font" crossorigin></link>
        <meta name="description" content="Design, development, and art portfolio of Jeff Nishihira" />
    </Helmet>
    <main>
        {imgsLoaded ? 
          <> 
          { visitCookie.scrollRan ? 
            <>
              <header>
                <MainNav />
                <hr className="header-border" />
              </header>
              <AnimatedRoutes />
            </>
            :
            <>
              <div className="draw-jacket">
                <aside id="ScrollPrompt" role="alert" className={scroll ? "scroll-prompt-fade" : ""}>
                  <p>Scroll down<br />to draw me</p>
                </aside>
                <img 
                  style={{display: animAppearance}} 
                  id="ScrollIntroAnim" 
                  alt="on scroll animation intro" 
                  src={"./anim-images/intro/drawintro_" + entImageIndex + ".svg"} 
                />
              </div>
            </>
          }
          </>
         : 
          <> 
            <h1 id="loadingTitle">Loading portfolio</h1>
          </>
        }
    </main>
    </>
  );
}

export default App;
