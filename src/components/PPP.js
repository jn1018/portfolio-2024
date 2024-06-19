import projimage0 from '../assets/project-images/ppp-1.png';
import projimage1 from '../assets/project-images/ppp-2.png';
import projimage2 from '../assets/project-images/ppp-3.png';

export default function PPP() {
    return (
        <>
        <div className="details-container">
            <section className="details-copy">
                <div className="fixed-copy">
                    <h1 className="project-page-heading">
                        <span className="cap-case">P</span>referred <span className="cap-case">P</span>rovider</h1>
                    <p>ICCSAFE.ORG is the Corporate site for the ICC.  It serves as a largely informational gateway to other
                       sites.  </p>
                    <h2>Roles</h2>
                    <p>Backend development (PHP), Frontend development</p>
                    <h2>Stack</h2>
                    <p>PHP, Joomla, HTML</p>
                </div>
            </section>
            <section className="details-images">
                <img src={projimage0} alt="Preferred Provider homepage" /><br />
                <img src={projimage1} alt="ICC main menu" /><br />
                <img src={projimage2} alt="ICC 2022 Annual Report microsite homepage" /><br />
            </section>
        </div>
        </>
    )
}
