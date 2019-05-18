import React, { Component } from "react";
import Draggable from "react-draggable";
import { Col, Row, Image, Button } from "react-bootstrap";

class Projects extends Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    

    return (
      <div className="project-page">
      <h3>plz drag me!</h3>
        <Draggable 
        bounds="body" 
        defaultPosition={{x: 600, y: 350}}
        handle="strong" 
        {...dragHandlers}>
          <div className="project-box break no-cursor">
            <strong className="cursor">
              <div> Break@niki </div>
            </strong>
            <Image className="project-pic" src="assets/screenshot-break.png" />
            <Row>
              <Col
                md={{ span: 10, offset: 1 }}
                className=" d-flex align-items-center"
              >
                <div className="project-info">
                  They were dropping, losing altitude in a canyon of rainbow
                  foliage, a lurid communal mural that completely covered the
                  hull of the bright void beyond the chain link. Still it was a
                  handgun and nine rounds of ammunition
                </div>
              </Col>
            </Row>
            <br />
            <div className="project-button">
              <Button variant="secondary" size="lg" href="./1#">
                Click here!
              </Button>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" defaultPosition={{x: 650, y: 350}} handle="strong" {...dragHandlers}>
          <div className="project-box no-cursor">
            <strong className="cursor">
              <div>Api</div>
            </strong>
            <Image className="project-pic" src="assets/beter.png" />
            <Row>
              <Col
                md={{ span: 10, offset: 1 }}
                className=" d-flex align-items-center"
              >
                <div className="project-info">
                  They were dropping, losing altitude in a canyon of rainbow
                  foliage, a lurid communal mural that completely covered the
                  hull of the bright void beyond the chain link. Still it was a
                  handgun and nine rounds of ammunition
                </div>
              </Col>
            </Row>
            <br />
            <div className="project-button">
              <Button variant="secondary" size="lg" href="./1#">
                Click here!
              </Button>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" handle="strong" {...dragHandlers}>
          <div className="project-box no-cursor">
            <strong className="cursor">
              <div>API & GameSite</div>
            </strong>
            <Image className="project-pic" src="assets/gamesite.png" />
            <Row>
              <Col
                md={{ span: 10, offset: 1 }}
                className=" d-flex align-items-center"
              >
                <div className="project-info">
                  They were dropping, losing altitude in a canyon of rainbow
                  foliage, a lurid communal mural that completely covered the
                  hull of the bright void beyond the chain link. Still it was a
                  handgun and nine rounds of ammunition
                </div>
              </Col>
            </Row>
            <br />
            <div className="project-button">
              <Button variant="secondary" size="lg" href="./1#">
                Click here!
              </Button>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" handle="strong" {...dragHandlers}>
          <div className="project-box no-cursor">
            <strong className="cursor">
              <div>ThatShot</div>
            </strong>
            <Image className="project-pic" src="assets/thatshot.png" />
            <Row>
              <Col
                md={{ span: 10, offset: 1 }}
                className=" d-flex align-items-center"
              >
                <div className="project-info">
                  They were dropping, losing altitude in a canyon of rainbow
                  foliage, a lurid communal mural that completely covered the
                  hull of the bright void beyond the chain link. Still it was a
                  handgun and nine rounds of ammunition
                </div>
              </Col>
            </Row>
            <br />
            <div className="project-button">
              <Button variant="secondary" size="lg" href="./1#">
                Click here!
              </Button>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" defaultPosition={{x: 100, y: -100}} handle="strong" {...dragHandlers}>
          <div className="project-box no-cursor">
            <strong className="cursor">
              <div>Chappe</div>
            </strong>
            <Image className="project-pic" src="assets/chappe.png" />
            <Row>
              <Col
                md={{ span: 10, offset: 1 }}
                className=" d-flex align-items-center"
              >
                <div className="project-info">
                  They were dropping, losing altitude in a canyon of rainbow
                  foliage, a lurid communal mural that completely covered the
                  hull of the bright void beyond the chain link. Still it was a
                  handgun and nine rounds of ammunition
                </div>
              </Col>
            </Row>
            <br />
            <div className="project-button">
              <Button variant="secondary" size="lg" href="./1#">
                Click here!
              </Button>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" defaultPosition={{x: 100, y: -100}} handle="strong" {...dragHandlers}>
          <div className="project-box no-cursor">
            <strong className="cursor">
              <div>Portfolio V1</div>
            </strong>
            <Image className="project-pic" src="assets/portfolio-v1.png" />
            <Row>
              <Col
                md={{ span: 10, offset: 1 }}
                className=" d-flex align-items-center"
              >
                <div className="project-info">
                  They were dropping, losing altitude in a canyon of rainbow
                  foliage, a lurid communal mural that completely covered the
                  hull of the bright void beyond the chain link. Still it was a
                  handgun and nine rounds of ammunition
                </div>
              </Col>
            </Row>
            <br />
            <div className="project-button">
              <Button variant="secondary" size="lg" href="./1#">
                Click here!
              </Button>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" defaultPosition={{x: 100, y: -100}} handle="strong" {...dragHandlers}>
          <div className="project-box no-cursor">
            <strong className="cursor">
              <div>Portfolio V2</div>
            </strong>
            <Image className="project-pic" src="assets/portfolio-v2.png" />
            <Row>
              <Col
                md={{ span: 10, offset: 1 }}
                className=" d-flex align-items-center"
              >
                <div className="project-info">
                  They were dropping, losing altitude in a canyon of rainbow
                  foliage, a lurid communal mural that completely covered the
                  hull of the bright void beyond the chain link. Still it was a
                  handgun and nine rounds of ammunition
                </div>
              </Col>
            </Row>
            <br />
            <div className="project-button">
              <Button variant="secondary" size="lg" href="./1#">
                Click here!
              </Button>
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default Projects;
