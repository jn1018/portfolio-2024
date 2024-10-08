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
                    rel="noreferrer" 
                    title="National Louis University website"
                    className="view-url"
                >
                    Visit Project
                </a>
            </section>
            <section className="details-images">
                <img className="proj-image one" src="/project-images-large/nlu-1.jpg" alt="NLU homepage full" />
                <video className="proj-image two" src="/videos/nlu_departments_video.mp4" type="video/mp4" width="850" height="287" autoPlay muted loop playsInline >
                    ICC homepage navigation menu video
                </video>
                <img class="proj-image three" src="/project-images-large/nlu-3.jpg" alt="NLU main menu" />
            </section>
        </div>
    );

};