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
            <div className="project-items">
            Work in progress
            </div>
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
            <div className="project-items">
            Links to            </div>
            
              <Button target="blank" variant="secondary" size="lg" href="https://github.com/jordy770/Chappe">
                To my Github
              </Button>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default Doggo;
