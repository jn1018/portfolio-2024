// Import project images
import projimage0 from '../assets/project-images/nlu-1.jpg';
import projimage1 from '../assets/project-images/nlu-3.png';

export default function NLU() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        National Louis University
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>The National Louis University website is the main infomational and 
                                enrollment property of NLU. </p>
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
                            <p>Transformed the visual identity of the website homepage, providing UI wireframes and high-fidelity
                                mockups.  Translated the approved mockups into code. 
                            </p>
                        </div>
                    </div>
                    <div id="stack" className="accordion">
                        <h3>Stack</h3>
                        <div role="region" className="region">
                            <p>Coldfusion, Javascript, HTML, CSS</p>
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
                <img src={projimage0} alt="NLU homepage full" /><br />
                <img src={projimage1} alt="NLU main menu" /><br />
            </section>
        </div>
    );

};