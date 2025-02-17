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
                        <a href="./ganesh_gandla_resume.pdf" download><button type="button">Resume</button></a>
                        <button type="button">Contact Info</button>
                    </div>

                    <div id="SociaBtn">

                        <a href="https://github.com/Ganesh-Gandla"><img src='./icons/github.svg' width={'30px'}></img></a>
                        <a href="https://www.linkedin.com/in/ganeshgandla/"><img src='./icons/linkedin.svg' width={'30px'}></img></a>
                        <img src='./icons/email.png' width={'30px'} height={'32 px'}></img>

                    </div>
                </div>                

                <div className="window">
                    <div className="window-header">
                        <span className="circle red"></span>
                        <span className="circle yellow"></span>
                        <span className="circle green"></span>
                    </div>
                    <div className="window-content">
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