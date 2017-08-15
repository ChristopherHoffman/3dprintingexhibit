import React from "react";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

const Footer = () =>
  <Segment inverted vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
    <Container textAlign="center">
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Other Resources" />
            <List link inverted>
              <List.Item as="a" href="https://sfcollege.campuslabs.com/engage/organization/nerds">
                Society For Nerds
              </List.Item>
              <List.Item as="a" href="https://www.youtube.com/hoffmanengineering">
                Hoffman Engineering
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Learn More!" />
            <p>Want to meet other 3D printing Enthusiasts?</p>
            <a href="https://www.meetup.com/Gainesville-3D-Printing-Enthusiasts/">
              Join our monthly Gainesville 3D Printing Enthusiasts Meetup!
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>;

export default Footer;
