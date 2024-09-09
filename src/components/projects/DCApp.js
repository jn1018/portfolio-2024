export default function DCApp() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        ICC's Digital Codes mobile application
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>ICC's Digital Codes platform is the primary resource of codes and standards for industry professionals. 
                                
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>Primary UI/UX designer</p>
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
                            <p>Figma</p>
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
                <img src="/project-images-large/dc-app-1.jpg" alt="Digital Codes App - Front Page" />
                <br />
                <img src="/project-images-large/dc-app-2.jpg" alt="Digital Codes App - Content Search" />
                <br />
                <img src="/project-images-large/dc-app-3.jpg" alt="Digital Codes App - My Notes tool" />
                <br />
                <img src="/project-images-large/dc-app-4.jpg" alt="Digital Codes App - Chapter details page" />
                <br />
                <img src="/project-images-large/dc-app-5.jpg" alt="Digital Codes App - Create a Bookmark or Note feature" />
                <br />
            </section>
        </div>
    )
}
