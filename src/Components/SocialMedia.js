import React from 'react'
import './SocialMedia.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithubSquare,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


function SocialMedia(){
    return(
            <div className = "social-container">
                <h3>Social Media</h3>
                <section className = "social-logos"> 
                    <a className = "github-icon">
                        <FontAwesomeIcon icon = {faGithubSquare} size = "2x"/>
                    </a>
                    <a className = "linked-icon">
                        <FontAwesomeIcon icon = {faLinkedin} size = "2x"/>
                    </a>
                </section>
            </div>
    )
}

export default SocialMedia