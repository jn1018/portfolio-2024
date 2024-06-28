import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import project images
import projimage0 from '../assets/project-images/icc-home-1.jpg';
import projimage1 from '../assets/project-images/icc-home-menu-1.png';
import projimage2 from '../assets/project-images/icc-2.png';
import projimage3 from '../assets/project-images/icc-ar-1.jpg';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function ICC() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        International Code Council (ICC)
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>Chances are, the building you work in or the home you live in was built with safety measures, 
                                conforming to building codes and standards developed by the ICC.  ICCSAFE.org is the corporate 
                                website for the ICC, and serves as a gateway for visitors and professionals to find out about 
                                the organization and access its solutions and other online properties.
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>Co-team lead software engineer and UI designer</p>
                        </div>
                    </div>
                    <div id="highlight" className="accordion">
                        <h3>Highlights</h3>
                        <div role="region" className="region">
                            <p>Led a wholesale site redesign effort. 
                            </p>
                        </div>
                    </div>
                    <div id="stack" className="accordion">
                        <h3>Stack</h3>
                        <div role="region" className="region">
                            <p>WordPress/PHP, jQuery, HTML, CSS</p>
                        </div>
                    </div>
                </div>
                <a 
                    href="https://nl.edu" 
                    target="_blank" 
                    title="National Louis University website"
                    className="view-url"
                >
                    Visit Project
                </a>
            </section>
            <section className="details-images">
                <img src={projimage0} alt="ICC Corporate site homepage" />
                <br />
                <img src={projimage1} alt="ICC main menu" />
                <br />
                <img src={projimage2} alt="ICC 2022 Annual Report microsite homepage" />
                <br />
                <img src={projimage3} alt="CC 2022 Annual Report microsite homepage full" />
                <br />
            </section>
        </div>
    )
}
