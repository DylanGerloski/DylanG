import React from 'react';
import SocialMedia from './SocialMedia.js'
import './Navbar.css'
import bitmoji from "../img/bitmoji.png";
import resume from '../img/DGerloski_Resume.pdf'


function Navbar(){
    return (
        <div className = "navbar">
            <div className = "navcontainer">
                <section className = 'head'>
                    <img src = {bitmoji}></img>
                    <h1>Dylan Gerloski</h1>
                    <h3>Software Engineer</h3>
                </section>
                <section className = 'links'>
                    <a href = '#abme'>About me</a>
                    <a href = '#project'>Projects</a>
                    <a href = {resume} target = '_blank'>Resume</a>
                    <a href = '#contact'>Contact me</a>
                </section>
                <SocialMedia/>
            </div>
        </div>
    )
         
    
}

export default Navbar;