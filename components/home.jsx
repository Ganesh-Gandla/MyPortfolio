import React from "react";
import './Home.css'

const Home = () => {
    return (
        <section id="Home">
            <div className="introContainer container">
                <div id="introText">
                    <p>Hi... I'M...</p>
                    <h1>Ganesh Gandla</h1>
                    <p>Full stack developer</p>

                    <div id="introBtn">
                        <button type="button">Resume</button>
                        <button type="button">Contact Info</button>
                    </div>

                    <div id="SociaBtn">

                        <a href="https//www.github.com"><img src='./icons/github.svg' width={'30px'}></img></a>
                        <a href="https//www.linkedin.com"><img src='./icons/linkedin.svg' width={'30px'}></img></a>
                        <img src='./icons/email.png' width={'30px'} height={'32 px'}></img>

                    </div>
                </div>

                

                <div class="window">
                    <div class="window-header">
                        <span class="circle red"></span>
                        <span class="circle yellow"></span>
                        <span class="circle green"></span>
                    </div>
                    <div class="window-content">
                        <p>I build full-stack applications with React.</p>
                        <p>I specialized in Java Script for frontend and backend development.</p>
                        <p>I use databases like MongoDb and MySQL.</p>
                        <p>I maintain my code in GITHUB.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home