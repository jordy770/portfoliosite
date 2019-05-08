import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typist from "react-typist";
import "./main.scss";



class About extends Component {
  render() {
    return (
      <Container className="container">
        <Row>
          <Col className="title">
            <Typist
                className="landing-header"
                avgTypingSpeed={40}
                startDelay={2000}
              >
                What can i tell about myself             
                <Typist.Backspace count={28} delay={1000} />
                <Typist.Delay ms={750} />
                  About me !
                <Typist.Delay ms={1250} />
              </Typist>
          </Col>
        </Row>


        <Row>
          <Col className="animated fadeIn part1">
          <div className="test">Example</div>
          </Col >
          <Col className="animated fadeIn part2">
          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
