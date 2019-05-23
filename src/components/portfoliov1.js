import React, { Component } from "react";
import "./main.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

class Portfoliov1 extends Component {
  render() {
    return (
      <Container className="project-container">
        <h2 className="project-title"> Portfolio v1 </h2>
        <Row>
          <Col sm={12} xl={6}>
            <div className="project-items">
            Dit project was mijn eerste React project. Ik heb deze gemaakt in React, omdat ik het interessant vind om verschillende soorten van programmeren wil uitproberen en op deze manier. Mijn skills op deze manier uit te beiden. 
            </div>
          </Col>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/portfoliov1.png" className="project-image" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/portfoliov1.png" className="project-image" />
          </Col>
          <Col sm={12} xl={6}>
            <div className="project-items">
            Links to:            </div>
            <Button target="blank" variant="secondary" size="lg" href="https://portfolio-jordyvs.herokuapp.com">
                The website
              </Button>
              <Button target="blank" variant="secondary" size="lg" href="https://github.com/jordy770/react-app">
                My Github
              </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfoliov1;
