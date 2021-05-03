import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import AboutImg from "../../Assets/about.png";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Myself</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={AboutImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          MY <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "5%" }}>

          <div className="col-md-3 mb-5 pb-3 mt-3 d-flex justify-content-center">
            <div style={{ width: 150, height: 150 }}>
              <h4>React</h4>
              <CircularProgressbar styles={buildStyles({ pathColor: "yellow" })} value={80} text={`${80}%`} />
            </div>
          </div>
          <div className="col-md-3 mb-5 pb-3 mt-3 d-flex justify-content-center">
            <div style={{ width: 150, height: 150 }}>
              <h4>Javascript</h4>
              <CircularProgressbar styles={buildStyles({ pathColor: "goldenrod" })} value={85} text={`${85}%`} />
            </div>
          </div>
          <div className="col-md-3 mb-5 pb-3 mt-3 d-flex justify-content-center">
            <div style={{ width: 150, height: 150 }}>
              <h4>Node</h4>
              <CircularProgressbar styles={buildStyles({ pathColor: "green" })} value={75} text={`${75}%`} />
            </div>
          </div>
          <div className="col-md-3 mb-5 pb-3 mt-3 d-flex justify-content-center">
            <div style={{ width: 150, height: 150 }}>
              <h4>MongoDB</h4>
              <CircularProgressbar styles={buildStyles({ pathColor: "blue" })} value={70} text={`${70}%`} />
            </div>
          </div>
          <div className="col-md-3 mb-5 pb-3 mt-3 d-flex justify-content-center">
            <div style={{ width: 150, height: 150 }}>
              <h4>Bootstrap</h4>
              <CircularProgressbar styles={buildStyles({ pathColor: "yellow" })} value={80} text={`${80}%`} />
            </div>
          </div>
          <div className="col-md-3 mb-5 pb-3 mt-3 d-flex justify-content-center">
            <div style={{ width: 150, height: 150 }}>
              <h4>JAVA</h4>
              <CircularProgressbar styles={buildStyles({ pathColor: "gold" })} value={75} text={`${80}%`} />
            </div>
          </div>
          <div className="col-md-3 mb-5 pb-3 mt-3 d-flex justify-content-center">
            <div style={{ width: 150, height: 150 }}>
              <h4>CSS</h4>
              <CircularProgressbar styles={buildStyles({ pathColor: "green" })} value={85} text={`${85}%`} />
            </div>
          </div>
          <div className="col-md-3 mb-5 pb-3 mt-3 d-flex justify-content-center">
            <div style={{ width: 150, height: 150 }}>
              <h4>Firebase</h4>
              <CircularProgressbar styles={buildStyles({ pathColor: "goldenrod" })} value={70} text={`${70}%`} />
            </div>
          </div>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-c-line" />
          <Techstack iconName="devicon-cplusplus-line" />
          <Techstack iconName="devicon-java-plain-wordmark " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="cib-firebase" />
          <Techstack iconName="cib-css3" />
          <Techstack iconName="cib-redux" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="devicon-chrome-plain" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="cib-netlify" />
          <Techstack iconName="cib-heroku" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
