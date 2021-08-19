import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/rashadul_islam.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title="Full Stack Web Developer"
              date="I have following skills"
              content={[
                "Expertise: HTML5, CSS3, Bootstrap, JavaScript, ES6, React JS, React Router, Material UI.",
                "Comfortable: Node JS (Express), MongoDB, Firebase.",
                "Intermediate: C, C++, C#, JAVA.",
                "Familiar: Redux, SASS, React- Native, Typescript.",
                "Tools: VsCode, NetBeans, Code Blocks, Netlify, GitHub, Heroku, Chrome dev-tool."
              ]}
            />
            <h3 className="resume-title">Professional Training</h3>
            <Resumecontent
              title="Complete web development with Jhankar Mahbub [January 2021-present]"
              content={[
                "Learning core concept of web application and modern javascript framework.",
              ]}
            />
            <Resumecontent
              title="Industrial Training at Mistri Solutions [January 2021-present]"
              content={[
                "Learning how the application is build, maintenance, deploy and handover to client professionally.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="International University of Business Agriculture and Technology [Uttara, Dhaka] "
              date="2017 - 2021"
              content={[`CGPA: 3.83 / 4.00`]}
            />
            <Resumecontent
              title="12TH BOARD [Kurigram Govt. College, Kurigram]"
              date="2015 - 2016"
              content={["GPA: 4.58 / 5.00"]}
            />
            <Resumecontent
              title="10TH BOARD [Kurigram Govt. School, Kurigram] "
              date="2014"
              content={["GPA: 5.00 / 5.00"]}
            />
            <h3 className="resume-title">Personal Interest</h3>
            <Resumecontent
              title=""
              content={[
                "Problem Solving",
                `Playing Cricket`,
                `Watching Movies`,
                "Travelling"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
