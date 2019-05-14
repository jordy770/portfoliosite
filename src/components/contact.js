import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import "./main.scss";
import { Container, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  render() {
    return (
      <Container className="contact-container">
        <Row>
          <Col
            sm={12}
            xl={6}
            className="contact-detail d-flex align-items-center"
          >
            <Row>
              <Col md={{ span: 7, offset: 3 }}>
                <h2> Contact </h2>
                <p> Hi, </p>
                <p>
                  Deze periode ben ik opzoek naar een stageplek, graag wil ik
                  mezelf openstellen voor een Front-End stage. Daarbij wil ik
                  mijn skillset verbeteren op het gebied van front-end libaries,
                  zoals React, Vue of Angular. Verder wil ik me ook verdiepen op
                  het gebied van front-end animaties.
                </p>
                <p> Neem gerust contact met me op!</p>
                <br />
                <div className="my-details">
                  <strong>Jordy van Santen</strong>
                  <p>
                    {" "}
                    CMGT Student <br /> jordy.van.santen@gmail.com <br />{" "}
                    +31613588331
                  </p>
                </div>
                <br />
                <br />
                <ul>
                  <li>
                    <a href="https://codepen.io/jordy770/">
                      <FontAwesomeIcon icon={["fab", "codepen"]} size="lg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jordy-van-santen-b0a20851/">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jordy770/">
                      <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                    </a>
                    <i class="fab fa-facebook-square" />
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xl={6} className="contact-map">
            <Map
              center={[52.009186, 4.538564]}
              zoom={12}
              defaultWidth
              animate
              defaultHeight
              className="map-style"
            >
              <Marker
                anchor={[52.009186, 4.538564]}
                payload={1}
                onClick={({ event, anchor, payload }) => {}}
              />
            </Map>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
