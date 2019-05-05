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
      <div className="home">
        <Container className="part1">
          <Row className="show-grid text-center">
            <Col>
              <Typist
                className="landing-header"
                avgTypingSpeed={40}
                startDelay={2000}
              >
                Welcome to my web
                <Typist.Delay ms={500} />
                sete
                <Typist.Backspace count={5} delay={1000} />
                <Typist.Delay ms={750} />
                bsite
                <Typist.Delay ms={1250} />
              </Typist>
              </Col>
          </Row>
          <Row>
            <Col xs={12} sm={5} className="person-jumbo">
              <Jumbotron className="introtext-homepage">
      
                <p> This is my portfolio website.</p>
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

                <Button variant="secondary" size="lg" href="./aboutme">
                  About ME!
                </Button>
                <Button variant="secondary" size="lg" href="./projects">
                  My Projects!
                </Button>
              </Jumbotron>
            </Col>
            <Col xs={12} sm={7} className="person-wrapper">
              <Image src="assets/beter.png" rounded className="profile-pic" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
