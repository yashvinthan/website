import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashvinthan Moorthy </span>
            from <span className="purple">Kolathur, Chennai</span>.
            <br />
            I am currently a first-year B.Tech Computer Science and Engineering student at Dr. MGRDU University.
            <br />
            I have a strong passion for software development and technology, and I'm eager to apply my skills in a dynamic environment.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Technology Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Volunteering
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build, learn, and grow every day!"
          </p>
          <footer className="blockquote-footer">Yashvinthan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;