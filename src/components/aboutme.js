import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <Row className="about-content">
          <Col>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </Jumbotron>
            ;
          </Col>
          <Col>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </Jumbotron>
            ;
            <Jumbotron className="jumbo-timeline">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </Jumbotron>
            ;
          </Col>
        </Row>
        <Row>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default About;
