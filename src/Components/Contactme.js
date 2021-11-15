import React from 'react'
import './Contactme.css'
import  resume from '../img/DGerloski_Resume.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithubSquare,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

import {faFile} from "@fortawesome/free-regular-svg-icons";

 const Contactme = () => {

    return (
    <>
        <div className = 'Contactme-container' id = 'contact'>
           <div className = "title-container">
                <h1>Contacts</h1>
            </div>
            <div className = 'body-container'>
                <div className = 'socials-container'>
                    <div className = 'github-container'>
                        <h3>
                            If you'd like to view more of my projects or view my code, check out my Github. I'll have any new projects I'm working on there as well.
                            <a href = 'https://github.com/DylanGerloski' target = '_blank'>
                                <FontAwesomeIcon icon = {faGithubSquare} size = "2x" className = 'github'></FontAwesomeIcon>
                            </a>
                        </h3>
                    </div>
                    <div className = 'linkedin-container'>
                        <h3>
                            Make sure to add me on LinkedIn to stay up to date with  what I'm doing!
                            <a href = 'https://linkedin.com/in/dylan-gerloski' target = '_blank'>
                                <FontAwesomeIcon icon = {faLinkedin} size = "2x" className = 'linkedin'></FontAwesomeIcon>
                            </a>
                        </h3>
                    </div>
                </div>
                <div className = 'contacts-container'>
                    <h3>Email: dylanger2525@gmail.com</h3>
                    <h3>Phone: 773-266-4534</h3>
                    <div className = 'resume-container'>
                        <h3>Resume</h3>
                        <a href = {resume } target = '_blank' className = 'resume'> 
                            <FontAwesomeIcon icon = {faFile} size = '2x' className = 'resume'></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    </>
    )
}

export default Contactme