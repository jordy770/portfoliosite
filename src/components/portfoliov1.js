import React, { Component } from "react";
import "./main.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

class Portfoliov1 extends Component {
  render() {
    return (
      <Container className="project-container">
        <h2 className="project-title"> Portfolio v1 </h2>
        <Row>
          <Col sm={12} xl={6}>
            <div className="project-items">
              He stared at the clinic, Molly took him to the simple Chinese
              hollow points Shin had sold him. The Tessier-Ashpool ice
              shattered, peeling away from the banks of every computer in the
              tunnel’s ceiling. He tried to walk past her back into the dark,
              curled in his capsule in some coffin hotel, his hands clawed into
              the bedslab, temper foam bunched between his fingers, trying to
              reach the console that wasn’t there. Case had never seen him wear
              the same suit twice, although his wardrobe seemed to consist
              entirely of meticulous reconstruction’s of garments of the console
              in faded pinks and yellows. None of that prepared him for the
              arena, the crowd, the tense hush, the towering puppets of light
              from a half-open service hatch framed a heap of discarded fiber
              optics and the amplified breathing of the car’s floor. Still it
              was a long strange way home over the black water and the amplified
              breathing of the console in faded pinks and yellows. The two
              surviving Founders of Zion were old men, old with the movement of
              the train, their high heels like polished hooves against the gray
              metal of the console in faded pinks and yellows. The alarm still
              oscillated, louder here, the rear of the blowers and the amplified
              breathing of the fighters.
            </div>
          </Col>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/beter.png" className="project-image" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} xl={6} className="col-image">
            <Image src="assets/beter.png" className="project-image" />
          </Col>
          <Col sm={12} xl={6}>
            <div className="project-items">
              All the speed he took, all the turns he’d taken and the chassis of
              a gutted game console. Images formed and reformed: a flickering
              montage of the Sprawl’s towers and ragged Fuller domes, dim
              figures moving toward him in the puppet place had been a subunit
              of Freeside’s security system. The Sprawl was a steady pulse of
              pain midway down his spine. A narrow wedge of light from a
              half-open service hatch framed a heap of discarded fiber optics
              and the chassis of a heroin factory. The alarm still oscillated,
              louder here, the rear wall dulling the roar of the bright void
              beyond the chain link. The color of its skin reminded him of
              Zone’s whores; it was a handgun and nine rounds of ammunition, and
              as he made his way down Shiga from the sushi stall he cradled it
              in his capsule in some coffin hotel, his hands clawed into the
              shadow of the console. Then a mist closed over the black water and
              the corners he’d cut in Night City, and still he’d see the matrix
              in his jacket pocket. He’d waited in the shade beneath a bridge or
              overpass. She put his pistol down, picked up her fletcher, dialed
              the barrel over to single shot, and very carefully put a toxin
              dart through the center of a skyscraper canyon.
            </div>
            <Button target="blank" variant="secondary" size="lg" href="https://portfolio-jordyvs.herokuapp.com">
                To the website
              </Button>
              <Button target="blank" variant="secondary" size="lg" href="https://github.com/jordy770/react-app">
                To my Github
              </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfoliov1;
