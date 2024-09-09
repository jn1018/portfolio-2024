export default function IAS() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        International Accreditation Service (IAS)
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>The mission of the IAS is to provide the highest quality accreditation services for all 
                                concerned with public safety and sustainability through the principle of "One Test, 
                                One Inspection, One Certification Worldwide."
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>Front-end development</p>
                        </div>
                    </div>
                    <div id="highlight" className="accordion">
                        <h3>Highlights</h3>
                        <div role="region" className="region">
                            <p>Was primary developer on a redesign of the homepage, including the global site navigation menu
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
                    href="https://www.iasonline.org/" 
                    target="_blank" 
                    rel="noreferrer" 
                    title="National Louis University website"
                    className="view-url"
                >
                    Visit Project
                </a>
            </section>
            <section className="details-images">
                <img src="/project-images-large/ias-1.jpg" alt="IAS site full homepage" />
                <br />
                <img src="/project-images-large/ias-calibration.jpg" alt="IAS training homepage example" />
                <br />
                <img src="/project-images-large/ias-contact.jpg" alt="IAS Contact page" />
                <br />
            </section>
        </div>
    )
}
