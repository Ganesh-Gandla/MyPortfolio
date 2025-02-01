import React from "react";
import SkillSlider from "../components/SkillSlider.jsx";

const AboutMe = () => {
    return (
        <>

            <div id="AboutSection" className="container">

                <p className='slideX'>Get To Know More</p>
                <h1 className='slideY'>About Me</h1>

                <div id="AboutContainer">
                    <div id="AboutDesc">
                        <p>
                            Hi, I'm Ganesh Gandla, a passionate React.js Developer eager to start my career in web development.
                            I specialize in building dynamic and responsive web applications using React.js, Node.js, and MongoDB, with strong skills in HTML, CSS, JavaScript, SQL, Git, and GitHub.
                            Constantly learning and exploring new technologies, I love turning ideas into seamless digital experiences. Let’s connect and create something amazing!
                        </p>
                    </div>

                    <div id="AboutText">

                        <div id="introImg">
                            <img src="./ganesh.png" alt="ganesh gandla" width={'200px'} />
                        </div>

                        <div id="AboutExEd">
                            <div id="AboutExperience">
                                <p>Experience</p>
                                <p>5+ years</p>
                                <p>Content moderator</p>
                            </div>

                            <div id="AboutEducation">
                                <p>Education</p>
                                <p>B.Tech</p>
                                <p>Mechanical Engineering</p>
                            </div>
                        </div>


                    </div>
                        <SkillSlider />
                </div>
            </div>
        </>
    )
}

export default AboutMe