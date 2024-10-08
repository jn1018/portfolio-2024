/* Import React */
import React, {useState, useEffect} from 'react';

// Import cookies 
import { useCookies } from 'react-cookie';

/* Import React and framer motion components */
import {Helmet} from "react-helmet";

/* Import assets */
import './assets/css/main.css';

/* Import preloaded images list */
import { PRELOADIMAGES } from "./components/PreloadImages";

/* Import main navigation components */
import MainNav from "./components/MainNav";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [imgsLoaded, setImgsLoaded] = useCookies(false); // get images for preload
  const [failSafe, setFailSafe] = useState(false);
  
  useEffect(() => {
    // Begin preload function
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
            setFailSafe(true);
          }, 6000);  
        loadImg.onerror = err => reject(err);
      });
    }

    Promise.all(PRELOADIMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded('imagesLoaded', true))
      .catch(err => console.log("Failed to load images", err))
  }, []);

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
        {imgsLoaded.imagesLoaded || failSafe ? 
            <>
              <header>
                <MainNav />
                <hr className="header-border" />
              </header>
              <AnimatedRoutes />
            </>
          : 
            <> 
              <ProgressBar />
            </>
        }
    </main>
    </>
  );
}

export default App;
