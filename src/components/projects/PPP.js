export default function PPP() {
    return (
        <>
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        Preferred Provider
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>The Preferred Provider Program, focuses on training opportunities offered by various 
                                categories of ICC-approved education providers, which collectively form the ICC 
                                Preferred Provider Network (PPN). 
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>Lead Software Engineer, front and back-end development.</p>
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
                            <p>Joomla/PHP, jQuery, HTML, CSS</p>
                        </div>
                    </div>
                </div>
                <a 
                    href="https://ppp.iccsafe.org" 
                    target="_blank" 
                    rel="noreferrer" 
                    title="Preferred Provider Program website"
                    className="view-url"
                >
                    Visit Project
                </a>
            </section>
            <section className="details-images">
                <img src="/project-images-large/ppp-1.jpg" alt="Preferred Provider homepage" /><br />
                <img src="/project-images-large/ppp-2.jpg" alt="ICC main menu" /><br />
                <img src="/project-images-large/ppp-3.jpg" alt="ICC 2022 Annual Report microsite homepage" /><br />
            </section>
        </div>
        </>
    )
}
