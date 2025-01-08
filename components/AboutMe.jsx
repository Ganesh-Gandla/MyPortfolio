import React from "react";

const AboutMe = () => {
    return (
        <>

        <div id="AboutSection">

            <p>Get To Know More</p>
            <h1>About Me</h1>

            <div id="AboutContainer">
            

                <div id="myImg">
                    <img src="/components/ganesh.png" alt="" width={"300px"}/>
                </div>
                <div id="AboutText">
                    <div id="AboutExEd">
                        <div id="AboutExperience">
                            <p>Experience</p>
                            <p>4+ years</p>
                            <p>Content moderator</p>
                        </div>

                        <div id="AboutEducation">
                            <p>Education</p>
                            <p>B.Tech</p>
                            <p>Mechanicla Engineering</p>
                        </div>
                    </div>

                    <div id="AboutDesc">
                        <p>Naa gurunchi emaina rayali ikkada</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe