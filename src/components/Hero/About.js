import React from "react";
import workingFast from "../assets/working-fast.gif"
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './About.css'


const About = () => {
    return (
        <div className="home-about-section" id="about">
            <div className="intro" style={{ display: "flex", textAlign: "left", justifyContent: "space-around", alignItems: "center" }}>
                <div className="myAvtar">
                    <Tilt>
                        <img src={workingFast} className="img-fluid" alt="avatar" width="300px" height="350px" />
                    </Tilt>
                </div>
                <div className="home-about-description" style={{ width: "50%" }}>
                    <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "20px" }}>
                        LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                    </h1>
                    <p className="home-about-body" style={{ lineHeight: "1.25rem", fontSize: "1.2rem" }}>
                        Hi, my name is <span className="yellow">Kartik Bisht </span>
                        and I'm from <span className="yellow"> Noida, Uttar Pradesh.</span>
                        <br />
                        <br />
                        I am currently a 4th-year student pursuing B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning from VIT Bhopal University, Bhopal.
                        <br />
                        <br />
                        As a
                        <b className="yellow"> Full-Stack </b>developer,
                        I enjoy Learning new Technologies and sports.
                        <br />
                        <br />I am proficient in
                        <b className="yellow"> Java </b>
                        as well as have knowledge in programming languages such as c++ and Javascript
                        <br />
                        <br />
                        I have a passion for working
                        with <b className="yellow">Node.js, MongoDB,</b> and
                        <i>
                            <b className="yellow">
                                {" "}
                                modern Javascript libraries and frameworks
                            </b>
                        </i>
                        &nbsp; like
                        <i>
                            <b className="yellow"> React.js</b>
                        </i>
                        <br />
                        <br />
                        I am also interested in building new
                        <i>
                            <b className="yellow"> Web Technologies and Products, </b>
                            as well as exploring areas related to the field.
                        </i>
                        <br />

                    </p>
                </div>

            </div>
            <div>
                <div className="home-about-social" style={{ marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h1>FIND ME ON</h1>
                    <br />
                    <p>
                        Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                    </p>
                    <br />
                    <ul className="home-about-social-links" >
                        <li className="social-icons">
                            <a
                                href="https://github.com/bkartik01"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-divour  home-social-icons"
                                aria-label="github"
                            >
                                <AiFillGithub style={{ width: "45px", height: "45px", padding: "5px", color: "white", borderRadius: "50%", verticalAlign: "middle" }} />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/Kartikb01"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-divour  home-social-icons"
                                aria-label="twitter"
                            >
                                <AiOutlineTwitter style={{ width: "45px", height: "45px", padding: "5px", color: "white", borderRadius: "50%", verticalAlign: "middle" }} />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/kartik-bisht/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-divour home-social-icons"
                                aria-label="linkedin"
                            >
                                <FaLinkedinIn style={{ width: "45px", height: "45px", padding: "5px", color: "white", borderRadius: "50%", verticalAlign: "middle" }} />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/totallynotkartik/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-divour home-social-icons"
                                aria-label="instagram"
                            >
                                <AiFillInstagram style={{ width: "45px", height: "45px", padding: "5px", color: "white", borderRadius: "50%", verticalAlign: "middle" }} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
        </div>
    );

}

export default About