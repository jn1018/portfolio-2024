export default function ICC() {

    return (
        <>
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
                    href="https://www.iccsafe.org" 
                    target="_blank" 
                    title="International Code Council corporate website"
                    className="view-url" 
                    rel="noreferrer" 
                >
                    Visit Project
                </a>
            </section>
            <section className="details-images">
                <img className="proj-image one" src="/project-images-large/icc-home-1.jpg" alt="ICC Corporate site homepage" />
                <video className="proj-image two" src="/videos/icc_project_video1.mp4" type="video/mp4" width="549" height="309" autoPlay muted loop playsInline >
                    ICC homepage navigation menu video
                </video>
                <img className="proj-image three" src="/project-images-large/icc-2.jpg" alt="ICC 2022 Annual Report microsite homepage" />
                <img className="proj-image four" src="/project-images-large/icc-ar-1.jpg" alt="CC 2022 Annual Report microsite homepage full" />
            </section>
        </div>
        </>
    )
}
