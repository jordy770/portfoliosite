import React, { Component } from "react";
import "./main.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

class Apigamesite extends Component {
  render() {
    return (
      <Container className="project-container">
        <h2 className="project-title"> API & gamesite</h2>
        <Row>
          <Col>
            <div className="project-items">
              Voor dit project heb ik een eigen API opgezet doormiddel van MongoDB. Aan deze API zit een eigen gemaakte website die de gegeven van mijn API gebruiken. Doormiddel van deze website kan je ook extra informatie toevoegen, verwijderen en aanpassen.  
            </div>
          </Col>
          <Col className="col-image">
            <Image src="assets/gamesite.png" className="project-image" />
          </Col>
        </Row>
        <Row>
          <Col className="col-image">
            <Image src="assets/gamesite.png" className="project-image" />
          </Col>
          <Col>
            <div className="project-items">
            Links to            </div>
            
              <Button target="blank" variant="secondary" size="lg" href="https://github.com/jordy770/gamesite">
                To my Github
              </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Apigamesite;
