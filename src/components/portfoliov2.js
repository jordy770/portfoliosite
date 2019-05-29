import React, { Component } from "react";
import "./main.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";


class Portfoliov2 extends Component {
  render() {
    return (
      <Container className="project-container">
        <h2 className="project-title"> Portfolio v2 </h2>
        <Row>
          <Col sm={12} xl={6}>
            <div className="project-items">
              PortfolioV2 is net als portfolioV1 gemaakt met React, omdat ik wist dat ik nog lang niet alles had uitgeprobeerd met React. Vandaar dat ik deze website ook met React heb gemaakt.
              In dit project heb ik veel verschillende libraries toegevoegd om mijn portfolio een ervaring opzich zelf te maken en ik hoop dat dit gelukt is. 
            </div>
          </Col>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/portfolio-v2.png" className="project-image" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/portfolio-v2.png" className="project-image" />
          </Col>
          <Col sm={12} xl={6}>
            <div className="project-items">
            Links to:
            </div>
            <Button target="blank" variant="secondary" size="lg" href="https://jordyvs.nl">
                The website
              </Button>
              <Button target="blank" variant="secondary" size="lg" href="https://github.com/jordy770/portfoliosite">
                My Github
              </Button>
            
            </Col>
            </Row>
            
      </Container>
    );
  }
}

export default Portfoliov2;