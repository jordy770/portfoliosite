import React, { Component } from "react";
import "./main.scss";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";

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
          <Col sm={12} xl={6} className="intro">
          <h3> This is my portfolio website.</h3>
                <p>
                  {" "}
                  I'm Jordy van Santen and i'm 20 years old <br /> I'm a
                  beginning Creative programmer{" "}
                </p>
                <p>
                  {" "}
                  At this moment i'm studying at the university of applied
                  science Rotterdam and the course I'm following is Creative
                  Media and Game Technologies.
                </p>
                <p> Click Here if you want to know me Better!!</p>

                <Button className="-button" variant="secondary" size="lg" href="./aboutme">
                  About ME!
                </Button>
                <Button className="-button" variant="secondary" size="lg" href="./projects">
                  My Projects!
                </Button>          </Col>
          <Col sm={12} xl={6} className="pf">
            <Image src="assets/beter.png" rounded className="profile-pic" />         
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Landing;
