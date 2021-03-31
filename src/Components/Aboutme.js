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
            Hey there I'm Dylan and I am a soon to be graduate from Texas Tech
            University. I am currently in search for work as a software
            engineer or other job opportunities. Apart from software development, I've also 
            made some machine learning applications as well as some other things. I wanted
            to make this website to display some of those projects, as well as to practice my web
            application skills. This is a fully responsive website, so feel free to check it out!
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
