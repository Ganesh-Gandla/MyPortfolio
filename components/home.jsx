import React from "react";
import './Home.css'

const Home = () => {
    return (
        <section id="Home">
            <div className="introContainer">
                <div id="introText">
                    <p>Hi... I'M...</p>
                    <h1>Ganesh Gandla</h1>
                    <p>Full stack developer</p>

                    <div id="introBtn">
                        <button type="button">Resume</button>
                        <button type="button">Contact Info</button>
                    </div>

                    <div id="SociaBtn">

                        <a href="https//www.github.com"><img src='../icons/github.svg' width={'30px'}></img></a>
                        <a href="https//www.linkedin.com"><img src='../icons/linkedin.svg' width={'30px'}></img></a>
                        <img src='../icons/email.png' width={'30px'} height={'32 px'}></img>

                    </div>
                </div>

                <div id="introImg">
                    <img src="components/ganesh.png" alt="ganesh gandla" width={'300px'} />
                </div>
            </div>
        </section>
    )
}

export default Home