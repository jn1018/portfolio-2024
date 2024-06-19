import projimage0 from '../assets/project-images/icc-home-1.jpg';
import projimage1 from '../assets/project-images/icc-home-menu-1.png';
import projimage2 from '../assets/project-images/icc-2.png';
import projimage3 from '../assets/project-images/icc-ar-1.jpg';

export default function ICC() {
    return (
        <>
        <div className="details-container">
            <section className="details-copy">
                <div className="fixed-copy">
                    <h1 className="project-page-heading">
                        <span className="cap-case">I</span>nternational <span className="cap-case">C</span>ode <span className="cap-case">C</span>ouncil <span className="cap-case">(ICC)</span></h1>
                    <p>Chances are, the building you work in or the home you live in was built with safety measures, 
                        conforming to building codes and standards developed by the ICC.  ICCSAFE.org is the corporate 
                        website for the ICC, and serves as a gateway for visitors and professionals to find out about 
                        the organization and access its solutions and other online properties.</p>
                    <h2>Roles</h2>
                    <p>Co-team lead software engineer and UI designer.</p>
                    <h2>Highlights</h2>
                    <p>Led a wholesale site redesign effort.</p>
                    <h2>Stack</h2>
                    <p>PHP, Wordpress, JQuery, HTML, CSS</p>
                </div>
            </section>
            <section className="details-images">
                <img src={projimage0} alt="ICC Corporate site homepage" /><br />
                <img src={projimage1} alt="ICC main menu" /><br />
                <img src={projimage2} alt="ICC 2022 Annual Report microsite homepage" /><br />
                <img src={projimage3} alt="CC 2022 Annual Report microsite homepage full" /><br />
            </section>
        </div>
        </>
    )
}
