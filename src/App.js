/* Import React */
import * as React from 'react';

/* Import React and framer motion components */
import {Helmet} from "react-helmet";

/* Import assets */
import './assets/css/main.css';

/* Import main navigation components */
import MainNav from "./components/MainNav";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {

  return (
    <>
    <Helmet>
        <title>Drawn ~ Art, Design and Development portfolio of Jeff Nishihira</title>
        <link rel="stylesheet" href="https://use.typekit.net/hvj7zun.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Design, development, and art portfolio of Jeff Nishihira" />
    </Helmet>
    <header>
        <MainNav />
    </header>
    <div class="main">
        <AnimatedRoutes />
    </div>
    <footer></footer>
    </>
  );
}

export default App;
