import React from 'react';
import './Hero.css'
import myImg from '../img/portfolio-pfp.jpg'
import wave from '../assets/waving-hand.gif'
import About from './About';
import NavBar from '../Navbar/Navbar';
const Hero = () => {
  
  return (
    <div id="hero">
      <NavBar/>
      <br/>
      <br/>
        <div className="home-content">
            <div className="home-header" style={{paddingBottom: "12%"}}>
              <h3 style={{ paddingBottom: 15, textAlign: "left" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  <img src={wave} alt='waving-hand' height="30px" width="30px"/>
                </span>
              </h3>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Vatsal Agarwal</strong>
              </h1>

              <h3 style={{textAlign: "right", marginTop: "20px"}}>
                MERN Stack Developer
              </h3>
            </div>

            <div style={{ paddingBottom: 20, width: "40%" }}>
              
               <img className='profilePic' src={myImg} alt='profile'/>
            </div>
        </div>
        <About/>
      </div>
  );
};

export default Hero;