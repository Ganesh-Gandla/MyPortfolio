import React from "react";

const AboutMe = () => {
    return (
        <>

        <div id="AboutSection" className="container">

            <p className='slideX'>Get To Know More</p>
            <h1 className='slideY'>About Me</h1>

            <div id="AboutContainer">
            

                <div id="myImg">
                {/* <img src="./components/ganesh.png" alt="secure-Pass" width={'300px'}></img> */}
                </div>
                <div id="AboutText">
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

                    <div id="AboutDesc">
                        <p>Naa gurunchi telusukovalsindhi inka vundhiiii</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe