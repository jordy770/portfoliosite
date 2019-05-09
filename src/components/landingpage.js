import React, { Component } from "react";
import "./main.scss";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";

import Typist from "react-typist";

class Landing extends Component {
  render() {
    return (
      <Container>
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
          <Col sm={12} xl={12} className="pf">
            <Image src="assets/beter.png" rounded className="profile-pic" />
          </Col>
          </Row>
          <br/>
          <Row>
          <Col sm={12} xl={12} className="intro">
           <h5> Hi, This is me Jordy van Santen, I'm a CMGT Student looking for an Internship!
           </h5>
            <p> Click Here if you want to know me Better!!</p>
            <Button
              className="-button"
              variant="secondary"
              size="lg"
              href="./aboutme"
            >
              About ME!
            </Button>
            <Button
              className="-button"
              variant="secondary"
              size="lg"
              href="./projects"
            >
              My Projects!
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
