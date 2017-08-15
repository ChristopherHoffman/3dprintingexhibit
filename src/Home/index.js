import React, { Component } from "react";
import { Container, Image, Header, Segment, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import exhibit from "../assets/images/Main.jpg";

class Home extends Component {
  render() {
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header textAlign="center" size="huge">
          Welcome to the 3D Printing Exhibit at Santa Fe!
        </Header>
        <Image src={exhibit} bordered centered shape="rounded" size="huge" ui />
        <Container>
          <Header>What is 3D Printing?</Header>
          <p>
            3D Printing is a way to turn digital 3D models into a real-world objects! It is a form of additive
            manufacturing, where material is added instead of being cut away, and can be used to produce objects which
            would be impossible to create using other traditional methods.{" "}
          </p>
          <Image centered shape="rounded" src="http://i.imgur.com/KMxrp7W.gif" />
          <Header>How does it work?</Header>
          <p>
            Object are printed in many 2D layers, each stacked one after another. There are a variety of different types
            of 3D printers, but the two most common are filament-based FDM (fused deposition modeling) printers, and
            resin-based SLA (Sterolithography) printers. FDM printers use a roll of thin plastic filament, which is
            melted and a precise amount is extruded to form each layer. In a resin SLA printer, a liquid light-sensative
            resin is cured by a laser, and the object is pull out from the resin tank.
          </p>
          <Image centered shape="rounded" src="https://www.geek.com/wp-content/uploads/2014/03/10.gif" />
          <Header>Why is this on display?</Header>
          <p>
            Gainesville contains many 3D printing enthusiasts! As the machines are becoming more affordable, there is an
            every growing group of people interested in this exciting new technology. Even many libraries and other
            public venues are purchasing 3D printers for the public to use and print 3D models.
          </p>
          <p>
            If you are interested in learning more about 3D printing, and want to meet others in the Gainesville
            Community who are, feel free to join the
            <strong>
              {" "}<a href="https://www.meetup.com/Gainesville-3D-Printing-Enthusiasts/">
                the monthly Gainesville 3D Printing Enthusiasts Meetup!
              </a>
            </strong>
          </p>
        </Container>
        <Button as={Link} to="/exhibits" primary floated="right" size="big" style={{ marginTop: "1em" }}>
          View the Exhibits
          <Icon name="right chevron" />
        </Button>
        <Segment style={{ marginTop: "5em" }}>
          <p>Sponsored by the Society of Nerds</p>
        </Segment>
      </Container>
    );
  }
}

export default Home;
