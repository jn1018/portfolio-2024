// Import project images
import projimage0 from '../assets/project-images/ancr-homepage-1.jpg';
import projimage1 from '../assets/project-images/ancr-contributors-1.jpg';
import projimage2 from '../assets/project-images/ancr-join-1.jpg';

export default function ANCR() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        Alliance for National &amp; Community Resilience (ANCR)
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>How well can your community handle adversity? </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>Front-end and backend web developer</p>
                        </div>
                    </div>
                    <div id="highlight" className="accordion">
                        <h3>Highlights</h3>
                        <div role="region" className="region">
                            <p>Worked from UI wireframes and mockups to build the web presence.  Contributed on the UI design for 
                                mobile device screens.
                            </p>
                        </div>
                    </div>
                    <div id="stack" className="accordion">
                        <h3>Stack</h3>
                        <div role="region" className="region">
                            <p>Wordpress (using the Divi editor), HTML and CSS</p>
                        </div>
                    </div>
                </div>
                <a 
                    href="https://www.resilientalliance.org/" 
                    target="_blank" 
                    title="Alliance for National &amp; Community Resilience website"
                    className="view-url"
                >
                    Visit Project
                </a>
            </section>
            <section className="details-images">
                <img src={projimage0} alt="ANCR homepage full" /><br />
                <img src={projimage1} alt="ANCR Contributors page" /><br />
                <img src={projimage2} alt="ANCR Join Us page" />
            </section>
        </div>
    );

};