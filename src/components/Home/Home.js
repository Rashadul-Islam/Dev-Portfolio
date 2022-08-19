import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/rashed.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/rashadul_islam.pdf";

function Home() {
  return (
    <section>
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h3 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h3>

              <h3 className="heading-name">
                I'M
                <strong className="main-name"> Rashadul Islam</strong>
              </h3>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <Button
                  className="mt-5"
                  variant="primary"
                  href={pdf}
                  target="_blank"
                >
                  <i className="fas fa-download">&nbsp;</i>Download Resume
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
