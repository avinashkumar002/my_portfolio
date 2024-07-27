import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import bud from "../../Assets/Projects/bud.png";
import movie from "../../Assets/Projects/movieflix.png";
import medium from "../../Assets/Projects/medium.png";
import dash from "../../Assets/Projects/dash.png";
import tripy from "../../Assets/Projects/tripy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medium}
              isBlog={false}
              title="Medium"
              description="The Medium clone project is a web application that replicates Medium's core functionalities, including user authentication, content creation, editing tools, and a responsive design for a seamless blogging experience."
              ghLink="https://github.com/avinashkumar002/Blog_application"
              demoLink="https://symphonious-cascaron-7144bd.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripy}
              isBlog={false}
              title="Tripy"
              description="The hotel booking application features user authentication, hotel search with filters, room availability checks, booking management, payment integration, and a responsive design for a seamless user experience across all devices."
              ghLink="https://github.com/avinashkumar002/hotel-booking"
              demoLink="https://trippyy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie-Flix"
              description="The movie streaming application includes user authentication, movie and TV show search, personalized recommendations, playback controls, watchlist management, and a responsive design for an optimal viewing experience on all devices."
              ghLink="https://github.com/avinashkumar002/Netflix_react_clone.git"
              demoLink="https://melodious-muffin-62cdb8.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-App"
              description="The weather application provides user authentication, real-time weather updates, detailed forecasts, location-based weather information, customizable alerts, and a responsive design for an intuitive experience across all devices."
              ghLink="https://github.com/avinashkumar002/weather_app.git"
              demoLink="https://stellular-sherbet-79dab9.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dash}
              isBlog={false}
              title="Admin Dashboard"
              description="The admin dashboard, developed in TypeScript, features user authentication, comprehensive data visualization, real-time analytics, intuitive data management, user and role management, activity logs, customizable reporting, and a responsive design for a streamlined administrative experience across all devices."
              ghLink="https://github.com/avinashkumar002/admin-dashboard"
              demoLink="https://sensational-melomakarona-5e6ba3.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bud}
              isBlog={false}
              title="Grocery Buddy"
              description="Grocery Buddy is a to-do list application designed for managing grocery shopping, featuring item categorization, quantity tracking, reminders, and a user-friendly interface to streamline the grocery shopping experience"
              ghLink="https://github.com/avinashkumar002/grocery_buddy"
              demoLink="https://amazing-zabaione-0e2152.netlify.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
