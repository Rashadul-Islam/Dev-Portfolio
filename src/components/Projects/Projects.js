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
import string from "../../Assets/Projects/string.png";

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
              liveLink="https://flush-master.netlify.app/"
              gitLink="https://github.com/Rashadul-Islam/flush-master-client/"
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
                    <br />
                  </ol>
                </div>
              }
              liveLink="https://haat-bazar.netlify.app/"
              gitLink="https://github.com/Rashadul-Islam/haat-bazar-client/"
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
                    <br/><br/><br/><br/>
                  </ol>
                </div>
              }
              liveLink="https://dream-sports.netlify.app/"
              gitLink="https://github.com/Rashadul-Islam/dream-sports/"
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
              liveLink="https://take-ride.netlify.app/"
              gitLink="https://github.com/Rashadul-Islam/take-ride/"
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
                    <br/><br/>
                  </ol>
                </div>
              }
              liveLink="https://rashadul-islam.github.io/hungry-monster/"
              gitLink="https://github.com/Rashadul-Islam/hungry-monster/"
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
              imgPath={string}
              link="https://rashadulislam4581-87137.medium.com/things-you-need-to-know-about-string-6fa382872d76"
              title="Things you need to know about JavaScript string"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
