import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typist from "react-typist";
import {Link} from 'react-router-dom';
import "./main.scss";

class About extends Component {
  render() {
    return (
      <Container className="about">
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

        <Row className="animated fadeIn about-me">
          <Col sm={12} xl={6} className="animated fadeIn part1">
            <h2>About</h2>
            <h3> This is my portfolio website.</h3>
            <p>
              {" "}
              I'm Jordy van Santen and I'm 21 years old <br /> I'm a beginning
              Creative programmer{" "}
            </p>
            <p>
              {" "}
              In 2017 ben ik begon met de opleiding CMGT of ook wel Creative media & Game Technologies.
              Ik ben met deze opleiding begonnen, omdat mijn passie echt ligt bij computers.
              Sinds jong af aan heb ik vele uren achter mijn computer gespendeerd.
              Op deze is manier is mijn enthousiasme van computers ontstaan. Zo nu en dan kom ik websites tegen waardoor ik echt omver geblazen wordt. Uit vele inspiratiebronnen ben ik deze website gaan bouwen. Om daarbij zo veel mogelijk van mij skills terug te laten komen.
            </p>
          </Col>

          <Col sm={12} xl={6} className="animated fadeIn part2">
            <div className="skills">
              <Container>
                <Col>
                  <h2>Skills</h2>
                </Col>
                <Row>
                  <Col>
                    <div className="items">
                      <p>Css</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>Javascript</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>HTML</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>PHP</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="items">
                      <p>C#</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>.NET CORE</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>React</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>Vue</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="items">
                      <p>Wordpress</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>c++</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>Typescript</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="items">
                      <p>Json</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <br/>
            <hr/>
            <div className="cv">
            <h2>CV</h2>
            <p>Klik hier voor mijn CV</p>
            <Button
                  className="cv-button"
                  variant="secondary"
                  size="lg"
                  href="assets/CV_jordy_van_santen.pdf"
                  target="blank"
                >
                  DOWNLOAD
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
