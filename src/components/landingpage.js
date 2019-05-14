import React, { Component } from "react";
import "./main.scss";
import {Container, Row, Col, Image} from "react-bootstrap";

import Typist from "react-typist";

class Landing extends Component {
  render() {
    return (
      <Container className="landing-container">
        <Row>
          <Col className="title">
            <Typist
              className="landing-header"
              avgTypingSpeed={40}
              startDelay={2000}
            >
              Welcome to my website
              <Typist.Backspace count={7} delay={1000} />
              <Typist.Delay ms={750} />
              portfolio
              <Typist.Delay ms={1250} />
            </Typist>
          </Col>
        </Row>
        <Row>
          <Col sm={12} xl={6} className="intro d-flex align-items-center">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h5>
                  {" "}
                  Hi, This is me Jordy van Santen, I'm a CMGT Student looking
                  for an Internship!
                </h5>
                <a href="./aboutme"> Click Here if you want to know me Better!!</a>
              </Col>
            </Row>
          </Col>
          <Col sm={12} xl={6} className="pf">
            <Image src="assets/beter.png" rounded className="profile-pic" />
          </Col>
        </Row>
        <br/>
        {/* <Row className="buttons">
          <Col>
        <Button
                  className="-button"
                  variant="secondary"
                  size="lg"
                  href="./aboutme"
                  
                >
                  About ME!
                </Button>
                </Col>
                
                <Col>
                <Button
                  className="-button"
                  variant="secondary"
                  size="lg"
                  href="./projects"
                  
                >
                  My Projects!
                </Button>{" "}
                </Col>
        </Row> */}
      </Container>
    );
  }
}

export default Landing;
