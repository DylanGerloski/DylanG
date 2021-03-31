import React from 'react';
import "./Mainbody.css";
import Aboutme from "./Aboutme.js"
import Project from "./Projects.js"
import Contactme from "./Contactme.js"

function Mainbody(){
    return(
        <div className = "mainbody-container">
            <Aboutme/>
            <Project/>
            <Contactme/>
        </div>
    )
}

export default Mainbody;