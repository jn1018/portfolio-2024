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
        <meta name="description" content="Design, development, and art portfolio of Jeff Nishihira" />
    </Helmet>
    <header>
        <MainNav />
    </header>
    <div className="main">
        <AnimatedRoutes />
    </div>
    </>
  );
}

export default App;
