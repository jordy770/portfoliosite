import React, { Component } from "react";
import Draggable from "react-draggable";
import { Col, Row, Image, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

class Projects extends Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    

    return (
      <div className="project-page">
      <h3>plz drag me!</h3>
        <Draggable 
        bounds="body" 
        defaultPosition={{x: 600, y: 350}}
        >
          <div className="project-box ">
            <strong className="cursor">
              <div> Break@niki </div>
            </strong>
            <Image className="project-pic" draggable="false" src="assets/screenshot-break.png" />
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
              <Link to="breakatniki">
              <Button variant="secondary" size="lg">
                Click here!
              </Button>
              </Link>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body">
          <div className="project-box">
            <strong className="cursor">
              <div>API & GameSite</div>
            </strong>
            <Image className="project-pic" draggable="false" src="assets/gamesite.png" />
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
            <Link to="apigame">
              <Button variant="secondary" size="lg">
                Click here!
              </Button>
              </Link>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" >
          <div className="project-box">
            <strong className="cursor">
              <div>ThatShot</div>
            </strong>
            <Image className="project-pic" draggable="false" src="assets/thatshot.png" />
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
            <Link to="thatshot">
              <Button variant="secondary" size="lg">
                Click here!
              </Button>
              </Link>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" defaultPosition={{x: 100, y: -100}}>
          <div className="project-box">
            <strong>
              <div>Doggo</div>
            </strong>
            <Image className="project-pic" draggable="false" src="assets/chappe.png" />
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
            <Link to="doggo">
              <Button variant="secondary" size="lg">
                Click here!
              </Button>
              </Link>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" defaultPosition={{x: 100, y: -100}} >
          <div className="project-box ">
            <strong>
              <div>Portfolio V1</div>
            </strong>
            <Image className="project-pic" draggable="false" src="assets/portfolio-v1.png" />
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
            <Link to="portfoliov1">
              <Button variant="secondary" size="lg">
                Click here!
              </Button>
              </Link>
            </div>
          </div>
        </Draggable>

        <Draggable bounds="body" draggable="false" defaultPosition={{x: 100, y: -100}}>
          <div className="project-box ">
            <strong className="cursor">
              <div>Portfolio V2</div>
            </strong>
            <Image className="project-pic" draggable="false" src="assets/portfolio-v2.png" />
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
            <Link to="portfoliov2">
              <Button variant="secondary" size="lg">
                Click here!
              </Button>
              </Link>
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default Projects;
