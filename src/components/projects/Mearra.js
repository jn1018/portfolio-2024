export default function Mearra() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        Mearra ~ Selkie of the Sea
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>A timeless Celtic fairy tale
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>UI Designer, graphic artist, front and backend developer.</p>
                        </div>
                    </div>
                    <div id="highlight" className="accordion">
                        <h3>Highlights</h3>
                        <div role="region" className="region">
                            <p>This site is over 10 years old, but remains a classic.  This was my first use
                                of a parallax scrolling effect to support visual aesthetic.
                            </p>
                        </div>
                    </div>
                    <div id="stack" className="accordion">
                        <h3>Stack</h3>
                        <div role="region" className="region">
                            <p>PHP, jQuery, HTML, CSS</p>
                        </div>
                    </div>
                </div>
                <a 
                    href="https://lindamsmith.com/mearra/" 
                    target="_blank" 
                    title="Mearra ~ Selkie of the Sea website"
                    className="view-url" 
                    rel="noreferrer" 
                >
                    Visit Project
                </a>
            </section>
            <section className="details-images">
                <img src="/project-images-large/mearra-1.jpg" alt="Mearra ~ Selkie of the Sea homepage" />
                <br />
                <img src="/project-images-large/mearra-2.jpg" alt="Mearra parallax scroll - Story panel" />
                <br />
                <img src="/project-images-large/mearra-3.jpg" alt="Mearra background art" />
                <br />
            </section>
        </div>
    )
}
