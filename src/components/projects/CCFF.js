export default function CCFF() {

    return (
        <div className="details-container">
            <section className="details-copy">
                <div class="fixed-copy">
                    <h1 className="project-page-heading">
                        Chicago Comedy Film Festival poster
                    </h1>
                    <div id="about" className="accordion">
                        <h3>About</h3>
                        <div role="region" className="region initial">
                            <p>This entry won a contest and was selected as the official poster for the 6th Annual 
                                Chicago Comedy film festival. I used the old "snack bar" intermission cartoons at 
                                drive-in movies as inspiration, asking myself, "What if the characters jumped off 
                                the screen and went to a movie themselves?"
                            </p>
                        </div>
                    </div>
                    <div id="roles" className="accordion">
                        <h3>Roles</h3>
                        <div role="region" className="region">
                            <p>Illustrator</p>
                        </div>
                    </div>
                    <div id="stack" className="accordion">
                        <h3>Stack</h3>
                        <div role="region" className="region">
                            <p>Illustration, Adobe Illustrator</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="details-images">
                <img src="/project-images-large/ccff-1.jpg" alt="Chicago Comedy Film Festival poster - color complete" />   
                <img src="/project-images-large/ccff-2.jpeg" alt="Chicago Comedy Film Festival sketch drawing" />
            </section>
        </div>
    )
}
