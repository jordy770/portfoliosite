import React, { Component } from "react";
import "./main.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

class Thatshot extends Component {
  render() {
    return (
      <Container className="project-container">
        <h2 className="project-title">ThatShot</h2>
        <Row>
          <Col sm={12} xl={6}>
            <div className="project-items">
             Met dit project was ik begonnen om een nieuw medium op te zetten genaamt: ThatShot.
             ThatShot is een platform waar mensen eigen foto's kunnen plaatsen/delen met andere. ThatShot is geprogrammerd in C# in combitatie met .NET CORE MVC.
             Op het platform is het dus mogelijk om eigen afbeeldingen te kunnen uploaden en te weergeven met een eigen gegeven naam en Genre.
            </div>
          </Col>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/thatshot.png" className="project-image" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/thatshot.png" className="project-image" />
          </Col>
          <Col sm={12} xl={6}>
            <div className="project-items">

              <br/>
            Volg de link hieronder naar:
            </div>
            <Button target="blank" variant="secondary" size="lg" href="https://thatshot.azurewebsites.net">
                To the website
              </Button>
              <Button target="blank" variant="secondary" size="lg" href="https://github.com/jordy770/ThatShot">
                To my Github
              </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Thatshot;
