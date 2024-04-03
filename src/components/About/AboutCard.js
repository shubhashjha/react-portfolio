import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubhash Jha</span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently employed as a software Engineer at eClinicalWorks.
            <br />
            I have completed Bechlore of Engineering(BE) in Computer Engineering at AIET (Apollo Institutes Of Engineering and Technology).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everyday life is like programming, I guess. If you love something, you can put beauty into it!"{" "}
          </p>
          <footer className="blockquote-footer">Shubhash Jha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
