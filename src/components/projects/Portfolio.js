export default function Portfolio() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        Drawn. (Portfolio 2024)
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>The updated version of my art, design, and development portfolio for 2024. 
                                I used all my skills as a web designer, developer, animator, and graphic designer to produce it.
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>UI designer, animator, Front-end and backed developer</p>
                        </div>
                    </div>
                    <div id="stack" className="accordion">
                        <h3>Stack</h3>
                        <div role="region" className="region">
                            <p>React, Javascript/ES 6, GSAP, PHP</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="details-images">
                <video className="proj-image two" src="/videos/portfolio_2024_video1.mp4" type="video/mp4" width="1066" height="600" autoPlay muted loop playsInline >
                    Portfolio entrance animation video
                </video>
                <img src="/project-images-large/portfolio-2.jpg" alt="Portfolio projects carousel" /><br />
            </section>
        </div>
    )
}
