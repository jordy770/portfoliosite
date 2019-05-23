import React, { Component } from "react";
import "./main.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

class Doggo extends Component {
  render() {
    return (
      <Container className="project-container">
        <h2 className="project-title"> Doggo </h2>
        <Row>
          <Col sm={12} xl={6}>
            <div className="project-items">Dit is mijn laatste werk. Een kleine mobiele android applicatie die het mogelijk maakt om Foto's op te halen vanuit een API en deze te weergeven op een mobiel</div>
          </Col>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/chappe.png" className="project-image" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/chappe.png" className="project-image" />
          </Col>
          <Col sm={12} xl={6}>
            <div className="project-items">Links to: </div>

            <Button
              target="blank"
              variant="secondary"
              size="lg"
              href="https://github.com/jordy770/Chappe"
            >
              My Github
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Doggo;
