import {Helmet} from "react-helmet";
import {Routes, Route} from 'react-router-dom';

import './assets/css/main.css';
import MainNav from "./components/MainNav";

/* Import page components */
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectsDesign from "./components/ProjectsDesign";
import ProjectsDev from "./components/ProjectsDev";

function App() {
  return (
    <>
    <Helmet>
        <title>Drawn ~ Art, Design and Development portfolio of Jeff Nishihira</title>
        <link rel="stylesheet" href="https://use.typekit.net/hvj7zun.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Design, development, and art portfolio of Jeff Nishihira" />
    </Helmet>
    <header>
        <MainNav />
    </header>
    <div class="main">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects-design" element={<ProjectsDesign />} />
        <Route path="/projects-dev" element={<ProjectsDev />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <footer></footer>
    </>
  );
}

export default App;
