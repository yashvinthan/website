import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import libraryImg from "../../Assets/Projects/library.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a couple of projects I’ve worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Personal Portfolio Website"
              description="A responsive personal portfolio site built using HTML, CSS, and JavaScript. Features a user-friendly layout, interactive components, and a working contact form with JavaScript validation."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={libraryImg}
              isBlog={false}
              title="Library Management System"
              description="A console-based C++ project with features to add, remove, and search books. Utilized file handling for data storage and retrieval. Built as part of course project work."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;