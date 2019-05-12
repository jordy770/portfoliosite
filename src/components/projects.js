import React, { Component } from "react";
import Draggable from "react-draggable";
import { Col, Row, Container, Image, Button } from "react-bootstrap";

class Projects extends Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className="page">
        <Draggable bounds="body" handle="strong" {...dragHandlers}>
          <div className="project-box no-cursor">
            <strong className="cursor">
              <div>Title</div>
            </strong>
            <Image className="project-pic" src="assets/beter.png" />
              <Row>
                <Col md={{ span: 10, offset: 1 }} className=" d-flex align-items-center">
                  <div className="project-info">
                    They were dropping, losing altitude in a canyon of rainbow
                    foliage, a lurid communal mural that completely covered the
                    hull of the bright void beyond the chain link. Still it was
                    a handgun and nine rounds of ammunition
                  </div>
                </Col>
              </Row>
              <br/>
              <Button
                  className="project-button"
                  variant="secondary"
                  size="lg"
                  href="./1#"
                >
                  Click here!
                </Button>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default Projects;
