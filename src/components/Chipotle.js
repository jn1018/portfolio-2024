import projimage0 from '../assets/project-images/chipotle-0.png';
import projimage1 from '../assets/project-images/chipotle-1.png';
import projimage2 from '../assets/project-images/chipotle-2.png';
import projimage3 from '../assets/project-images/chipotle-3.png';

export default function Chipotle() {
    return (
        <>
        <div className="details-container">
            <section className="details-copy">
                <div className="fixed-copy">
                    <h1 className="project-page-heading">
                      <span className="cap-case">C</span>hipotle</h1>
                    <p>As part of their <i>Food With Integrity</i> campaign, Chipotle requested a simple form for potential produce suppliers
                    to fill out. </p>
                    <p>Roles: Backend development (PHP), Frontend development</p>
                    <p>Tools and Technologies: PHP, HTML, CSS, Photoshop</p>
                </div>
            </section>
            <section className="details-images">
                <img src={projimage0} alt="Chipotle Project Welcome screen" /><br />
                <img src={projimage1} alt="Chipotle Project Welcome screen" /><br />
                <img src={projimage2} alt="Chipotle Project Welcome screen" /><br />
                <img src={projimage3} alt="Chipotle Project Welcome screen" /><br />
            </section>
        </div>
        </>
    )
}
