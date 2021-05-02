import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" href={props.liveLink} target="_blank">
            <i className="cil-external-link">&nbsp;</i>
            {props.isBlog ? "View Blog" : "Live-Site"}
          </Button><Button variant="primary" href={props.gitLink} target="_blank">
            <i className="fab fa-github">&nbsp;</i>
            {props.isBlog ? "View Blog" : "Github"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
