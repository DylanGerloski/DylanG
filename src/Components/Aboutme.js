import React from "react";
import "./Aboutme.css";
import { ReactComponent as Blockchain } from "../img/Blockchain.svg";


function Aboutme() {
  return (
    <>
      <div className="about-me-container" id = "abme">
        <div className = 'heading'>
            <div className = 'heading-words'>
                <h1>Dylan Gerloski</h1>
                <h4>Software Engineer</h4>
                <div className = 'phone'>
                  <h4 style = {{display: 'inline'}}>Phone: </h4>
                  <h4 style = {{display: 'inline'}}>773-266-4534</h4>
                </div>
                <div className = 'email'>
                  <h4  style = {{display: 'inline'}}>Email: </h4>
                  <h4 style =  {{display: 'inline'}}>dylanger2525@gmail.com</h4>
                </div>
            </div>
            <Blockchain className = 'blockchain'></Blockchain>
        </div>
        <div className="intro-words">
          <p>
            Hey there! I'm Dylan and I am a soon to be Texas Tech University graduate.
            I will be graduating with a Computer Science degree and am interested in
            software engineering work or other job opurtunities.I have experience in software development, 
            machine learning applications, and have also done some work in Linux environemnts. I created this
            website to display some projects I have worked on and further develop my web applications
            skills. Feel free to explore this website and check out some of those projects!
           </p>
        </div>
        <div className = 'View-my-work'>
          <a href ="#project">
              View my work 
          </a>
        </div>


        
      </div>
    </>
  );
}

export default Aboutme;
