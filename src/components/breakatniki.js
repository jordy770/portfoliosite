import React, { Component } from "react";
import "./main.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

class Breakatniki extends Component {
  render() {
    return (
      <Container className="project-container">
        <h2 className="project-title"> Breat@niki </h2>
        <Row>
          <Col sm={12} xl={6}>
            <div className="project-items">
              Deze website heb ik gemaakt voor mijn tante. De website is geschreven in PHP en maakt gebruik van een SQL Database om bestellingen op te slaan.  
              <br/>
              De website maakt het mogelijk om een aantal hapjes te kunnen bestellen als klant. Deze gegevens worden daarna opgeslagen in een database. En kunnen worden bekeken door de Admin om deze mensen e.v.t. te benaderen voor een afspraak.
      
            </div>
          </Col>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/screenshot-break.png" className="project-image" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/screenshot-break.png" className="project-image" />
          </Col>
          <Col sm={12} xl={6}>
            <div className="project-items">
            Links to:         </div>
            <Button target="blank" variant="secondary" size="lg" href="https://stud.hosted.hr.nl/0948653/projecten/webtante/">
                To the website
              </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Breakatniki;
