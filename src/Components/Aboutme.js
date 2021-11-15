import React from "react";
import "./Aboutme.css";
import { ReactComponent as Blockchain } from "../img/Blockchain.svg";

function Aboutme() {
  return (
    <>
      <div className="about-me-container" id="abme">
        <div className="heading">
          <div className="heading-words">
            <h1>Dylan Gerloski</h1>
            <h4>Software Engineer</h4>
            <div className="phone">
              <h4 style={{ display: "inline" }}>Phone: </h4>
              <h4 style={{ display: "inline" }}>773-266-4534</h4>
            </div>
            <div className="email">
              <h4 style={{ display: "inline" }}>Email: </h4>
              <h4 style={{ display: "inline" }}>dylanger2525@gmail.com</h4>
            </div>
          </div>
          <Blockchain className="blockchain"></Blockchain>
        </div>
        <div className="intro-words">
          <p>
            Hey there! My name is Dylan and I am a recent Computer Science
            graduate from Texas Tech University. I created this website to
            display some of my projects that I have worked on in the past. I am
            an aspiring Software Engineer and I am currently open to job
            oppurtunites. So far I have expereince with some web development
            frameworks such as React, Node.js, and Express. Aside from web
            development, I also am very intersted in blockchain and crypto
            currency technologies. I was a part of the Plutus Pioneer Program
            which was a 10 week course that teaches you how to write smart
            contracts on the Cardano blockchain. As of now, I am furthering my
            skills as a web developer by working on some projects such a chess
            web application to practice different chess openings. I am also
            working on a crypto api to display different crypto currencies and
            there respective prices. Feel free to check out the rest of my
            website and contact me with any questions you may have.
          </p>
        </div>
        <div className="View-my-work">
          <a href="#project">View my work</a>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
