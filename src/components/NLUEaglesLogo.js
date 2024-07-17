// Import project images
import projimage0 from '../assets/project-images/eagle-1.jpg';
import projimage1 from '../assets/project-images/eagle-2.jpg';
import projimage2 from '../assets/project-images/eagle-3.jpg';
import projimage3 from '../assets/project-images/eagle-4.jpg';

export default function NLUEaglesLogo() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        NLU Eagles Logo
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>The president of National Louis University requested a logo the university's Harrison Professional Pathways Program.
                                The logo I created was used on T-shirts, buttons, and a number of different printed materials to promote the program.
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>Graphic designer</p>
                        </div>
                    </div>
                    <div id="stack" className="accordion">
                        <h3>Stack</h3>
                        <div role="region" className="region">
                            <p>Adobe Illustrator and Photoshop</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="details-images">
                <img src={projimage0} alt="NLU Eagles (Harrison Professional Pathways Program) Logo" />
                <br />
                <img src={projimage1} alt="NLU students wearing T-shirts with logo" />
                <br />
                <img src={projimage2} alt="Buttons with the logo printed on them" />
                <br />
                <img src={projimage3} alt="Harrison Professional Pathways Program" />
                <br />
            </section>
        </div>
    )
}
