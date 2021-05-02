import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import flushMaster from "../../Assets/Projects/flushmaster.JPG";
import haatBazar from "../../Assets/Projects/haatbazar.JPG";
import dreamSports from "../../Assets/Projects/dreamsports.JPG";
import takeRide from "../../Assets/Projects/takeride.JPG";
import hungryMonster from "../../Assets/Projects/hungrymonster.JPG";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

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
              imgPath={flushMaster}
              isBlog={false}
              title="Flush Master"
              description={
                <div id="dvLinks">
                  <h6><strong>Online based plumber services</strong></h6>
                  <p>Features:</p>
                  <ol>
                    <li>Used React, Bootstrap, CSS, MongoDB, Express JS, firebase authentication and private Route.</li>
                    <li>Stripe payment method implemented.</li>
                    <li>For booking any services user must have to login.</li>
                    <li>Separate dashboard for admin and user.</li>
                    <li>Add and show data dynamically on UI.</li>
                    <li>Full control over admin.</li>
                    <li>Fully responsive for all devices.</li>
                  </ol>
                </div>
              }
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={haatBazar}
              isBlog={false}
              title="Haat Bazar"
              description={
                <div id="dvLinks">
                  <h6><strong>Online grocery shop</strong></h6>
                  <p>Features:</p>
                  <ol>
                    <li>Used React, Bootstrap, CSS, MongoDB, Express JS, firebase authentication and private Route.</li>
                    <li>Separate dashboard for individual user.</li>
                    <li>For buying any product user must have to login.</li>
                    <li>Showing products dynamically on UI.</li>
                    <li>Generating order history for individual user.</li>
                    <li>Fully responsive for all devices.</li>
                    <br/>
                  </ol>
                </div>
              }
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dreamSports}
              isBlog={false}
              title="Dream Sports"
              description={
              <div id="dvLinks">
              <h6><strong>Provides sports league details</strong></h6>
              <p>Features:</p>
              <ol>
                <li>Used React, React-bootstrap, CSS, React-routing.</li>
                <li>Used sports API for collecting and showing all the information.</li>
                <li>For buying any product user must have to login.</li>
                <li>User can explore each of league in details.</li>
                <li>Fully responsive for all devices.</li>
              </ol>
            </div>
          }
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={takeRide}
              isBlog={false}
              title="Take Ride"
              description={
                <div id="dvLinks">
                <h6><strong>Online based riding services</strong></h6>
                <p>Features:</p>
                <ol>
                  <li>Used React, React-router and Dynamic routing, google map.</li>
                  <li>Used firebase authentication with general registration.</li>
                  <li>For booking any ride user need to login and provide the booking information.</li>
                  <li>Based on the booking information available ride will be shown.</li>
                  <li>Fully responsive for all devices.</li>
                </ol>
              </div>
            }
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hungryMonster}
              isBlog={false}
              title="Hungry Monster"
              description={
                <div id="dvLinks">
                <h6><strong>Provides various of food details</strong></h6>
                <p>Features:</p>
                <ol>
                  <li>Used HTML, CSS, Bootstrap and Vanilla Js.</li>
                  <li>Used Mealdb api for collecting and showing information.</li>
                  <li>User can search any food here.</li>
                  <li>By clicking search output user can see full details of that meal.</li>
                  <li>Fully responsive for all devices.</li>
                </ol>
              </div>
            }
              link="https://gist.github.com/soumyajit4419/dc94177bc4954752051798f88fbce1df"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
