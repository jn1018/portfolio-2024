export default function Chipotle() {
    return (
        <>
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        Chipotle
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>Danaco Solutions, at the request of their client Chipotle, approached us about producing a 
                                "fun and exciting" form for potential produce, meat, or dairy suppliers as part of their 
                                Food With Integrity campaign.
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>Primary front and back-end developer</p>
                        </div>
                    </div>
                    <div id="highlight" className="accordion">
                        <h3>Highlights</h3>
                        <div role="region" className="region">
                            <p>Produced in record time, the form requested was broad in its scope &ndash; looking for produce, dairy, or meat 
                                suppliers.  The resulting form featured several branches of questions determined by 
                                what has been selected.  
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
            </section>
            <section className="details-images">
                <img src="/project-images-large/chipotle-0.png" alt="Chipotle Project Start screen" /><br />
                <img src="/project-images-large/chipotle-1.png" alt="Chipotle Project preliminary information screen" /><br />
                <img src="/project-images-large/chipotle-2.png" alt="Chipotle Project - example of selecting a type of product" /><br />
                <img src="/project-images-large/chipotle-3.png" alt="Chipotle Project - example of selecting multiple locales" /><br />
            </section>
        </div>
        </>
    )
}
