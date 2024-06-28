import projimage0 from '../assets/project-images/chipotle-0.png';
import projimage1 from '../assets/project-images/chipotle-1.png';
import projimage2 from '../assets/project-images/chipotle-2.png';
import projimage3 from '../assets/project-images/chipotle-3.png';

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
                            <p>As part of their Food With Integrity campaign, Chipotle hired our client, 
                                Danaco Solutions, who in turn hired us to build a form for their client, Chipotle, 
                                to collect detailed information from potential product suppliers. 
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
                <img src={projimage0} alt="Chipotle Project Start screen" /><br />
                <img src={projimage1} alt="Chipotle Project preliminary information screen" /><br />
                <img src={projimage2} alt="Chipotle Project - example of selecting a type of product" /><br />
                <img src={projimage3} alt="Chipotle Project - example of selecting multiple locales" /><br />
            </section>
        </div>
        </>
    )
}
