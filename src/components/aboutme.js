import React, { Component } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
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
          <Col sm={12} xl={6} className="animated fadeIn part1">
            <h1>about</h1>
            <h3> This is my portfolio website.</h3>
            <p>
              {" "}
              I'm Jordy van Santen and i'm 20 years old <br /> I'm a beginning
              Creative programmer{" "}
            </p>
            <p>
              {" "}
              At this moment i'm studying at the university of applied science
              Rotterdam and the course I'm following is Creative Media and Game
              Technologies.
            </p>
          </Col>

          <Col sm={12} xl={6} className="animated fadeIn part2">
            <div className="skills">
              <Container>
              <Col>
              <h2>Skills</h2></Col>
                <Row>
                <Col>
                    <div className="items">
                      <p>Css</p>
                      <ProgressBar animated now={33} />
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>Javascript</p>
                      <ProgressBar variant="warning" animated now={66} />
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>HTML</p>
                      <ProgressBar variant="success" animated now={100} />
                    </div>
                  </Col>
                 
                  
                </Row>
                <Row>
                  <Col>
                    <div className="items">
                      <p>woop</p>
                      <ProgressBar animated now={45} />
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>woop</p>
                      <ProgressBar animated now={45} />
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>woop</p>
                      <ProgressBar animated now={45} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="items">
                      <p>woop</p>
                      <ProgressBar animated now={45} />
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>woop</p>
                      <ProgressBar animated now={45} />
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>woop</p>
                      <ProgressBar animated now={45} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="-timeline" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
