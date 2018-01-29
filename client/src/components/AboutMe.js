import React from 'react';
import me from '../images/me.jpg';

const AboutMe = () => {
    console.log(me);
    return (
        <div style={{margin: "25px 0px 25px 0px"}} className="cyan darken-3 white-text">
            <div className="row">
                <div className="col m6 s6" style={{paddingLeft: "40px"}}>
                    <h1 style={{textAlign: "center"}}>About Me</h1>
                    <p>
                    Hi, my name is Kyle Moulton. I am an aspiring software engineer. 
                    I live in Northern California where I am currently working for the County of Sonoma
                    in the Information Systems Department (ISD) as a Mail, Materials, and 
                    Records handler. In addition to my regular duties at ISD, I develop 
                    online workflows to automate manual tasks using the Thinksmart TAP
                    software platform. In this role, I collaborate directly with customer 
                    departments to spec out their specific needs and implement solutions. I 
                    meet regularly with the software vendor to discuss and resolve any complications
                    regarding these workflows.
                    </p>
                    <p>
                    I hold Associates of Science degrees in both Natural Sciences and Computer 
                    Science (Santa Rosa Junior College - 2011 and 2017), and a Bachelors of Science degree in
                    Earth Science (University of California, Santa Barbara - 2013). While Geology 
                    and the study of other natural sciences continues to interest me, my 
                    primary motivation lies with Computer Science. I've supplemented my learning in 
                    Computer Science with courses and content available on Free Code Camp, Udemy, and Coursera. 
                    I enjoy making desktop and web applications to develop solutions to obstacles I find in
                    my own life. I primarily make use of Java with the JavaFX framework for desktop
                    applications, and Javascript with the MERN (MongoDB, Express, React, Node) stack for 
                    web applications.
                    </p>
                </div>
                <div className="col m6 s6">
                    <div style={{margin: "10px"}}>
                        <img style={{border: "2px solid white", borderRadius: "25px"}} className="responsive-img" src={me} />
                    </div>
                </div>
            </div>
            <div className="row">
                <p></p>
            </div>
        </div>
    );
}

export default AboutMe;