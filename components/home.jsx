import React from "react";
import './Home.css'

const Home = () => {
    return (
        <section id="Home" className="container">
            <div className="introContainer">
                <div id="introText">
                    <p>Hi... I'M...</p>
                    <h1>Ganesh Gandla</h1>
                    <p>Full stack developer</p>

                    <div id="introBtn">
                        <a href="./ganesh_gandla_resume.pdf" download><button type="button">Resume</button></a>
                        <button type="button"><a href="#Contact"> Contact Info</a></button>
                    </div>

                    <div id="SociaBtn">

                        <a href="https://github.com/Ganesh-Gandla"><img src='./icons/github.svg' width={'30px'}></img></a>
                        <a href="https://www.linkedin.com/in/ganeshgandla/"><img src='./icons/linkedin.svg' width={'30px'}></img></a>
                        <a href="mailto:ganeshgandla19@gmail.com"><img src='./icons/email.png' width={'30px'} height={'32 px'}></img></a>

                    </div>
                </div>

                <div className="window-outer">
                    <div className="window">
                        <div className="window-header">
                            <span className="circle red"></span>
                            <span className="circle yellow"></span>
                            <span className="circle green"></span>
                        </div>

                        <div className="window-content">
                            <p>I build full-stack applications with <span className="blue">React</span>.</p>
                            <p>I specialized in <span className="yellow2">Java Script</span> for frontend and backend development.</p>
                            <p>I use databases like <span className="green2">MongoDB</span> and <span className="gray">MySql</span>.</p>
                            <p>I maintain my code in <span className="black">GitHub</span>.</p>
                        </div>
                        <img src="./icons/git.png" className="float1 float"></img>
                        <img src="./icons/github.png"  className="float2 float"></img>
                        <img src="./icons/React.png"  className="float3 float"></img>
                        <img src="./icons/Nodejs.png"  className="float4 float"></img>
                        <img src="./icons/js.png"  className="float5 float"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home