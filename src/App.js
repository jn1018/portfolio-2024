/* Import React */
import React, {useState, useEffect} from 'react';

/* Import React and framer motion components */
import {Helmet} from "react-helmet";

/* Import assets */
import './assets/css/main.css';
import './assets/css/FestivoLCWood.css';
import './assets/css/FestivoLCSketch2.css'

/* Import preloaded images list */
import { PRELOADIMAGES } from "./components/PreloadImages";

/* Import main navigation components */
import MainNav from "./components/MainNav";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 2000);

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(PRELOADIMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, []);

  return (
    <>
    <Helmet>
        <title>Drawn ~ Art, Design and Development portfolio of Jeff Nishihira</title>
        <link rel="stylesheet" href="https://use.typekit.net/hvj7zun.css"></link>
        <link rel="preload" href="./assets/fonts/FestivoLCSketch2.woff2" as="font" crossorigin></link>
        <link rel="preload" href="./assets/fonts/FestivoLCWood.woff2" as="font" crossorigin></link>
        <meta name="description" content="Design, development, and art portfolio of Jeff Nishihira" />
    </Helmet>
    <header>
        <MainNav />
    </header>
    <div className="main">
        {imgsLoaded ? (
          <AnimatedRoutes />
        ) : (
          <h1>Loading images...</h1>
        )}
    </div>
    </>
  );
}

export default App;
