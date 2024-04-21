// ReactRouter import for main navigation

import {Routes, Route, Link} from 'react-router-dom';
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import ProjectsDev from "./ProjectsDev";

function MainNav() {
  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
        <Link to="/projects-dev" className="nav-item">Projects</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects-dev" element={<ProjectsDev />} />
      </Routes>
    </>
  );
}

export default MainNav;