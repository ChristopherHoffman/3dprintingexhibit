import React, { Component } from "react";
import { Segment, Header, Grid, Rail, Sticky, Button } from "semantic-ui-react";
import Exhibit from "./Exhibit";
import scrollToComponent from "react-scroll-to-component";

import Pedistal from "./ExhibitPedistal";

import exhibits from "../assets/exhibits.json";

import "./ExhibitList.css";

class ExhibitList extends Component {
  constructor(props) {
    super(props);

    this.state = { exhibits: null, contextRef: null };
  }
  componentDidMount() {
    const data = exhibits.sort(this.sortExhibits);
    this.setState({
      exhibits: data,
    });

    scrollToComponent(this.tall, { offset: -50, align: "top", duration: 0 });
  }

  createExhibit = exhibit => {
    return <Exhibit key={exhibit.name} {...exhibit} />;
  };

  scroll = ref => {
    console.log(ref);
    scrollToComponent(ref, { offset: -50, align: "top", duration: 500, ease: "inOutCirc" });
  };

  handleContextRef = contextRef => this.setState({ contextRef });

  sortExhibits = (a, b) => {
    return a.pedistal > b.pedistal ? 1 : a.pedistal === b.pedistal ? (a.name > b.name ? 1 : -1) : -1;
  };

  render() {
    const shortPedExhibits = this.state.exhibits
      ? this.state.exhibits.filter(e => e.pedistal === 1).map(this.createExhibit)
      : null;
    const mediumPedExhibits = this.state.exhibits
      ? this.state.exhibits.filter(e => e.pedistal === 2).map(this.createExhibit)
      : null;
    const tallPedExhibits = this.state.exhibits
      ? this.state.exhibits.filter(e => e.pedistal === 3).map(this.createExhibit)
      : null;

    const { contextRef } = this.state;

    return (
      <Grid centered columns={2} style={{ marginTop: "3em" }}>
        <Grid.Column computer={8} tablet={16}>
          <div ref={this.handleContextRef}>
            <div ref={section => (this.tall = section)}>
              <Pedistal title="Tall Pedistal" exhibits={tallPedExhibits} />
            </div>
            <div ref={section => (this.left = section)}>
              <Pedistal title="Left Pedistal" exhibits={mediumPedExhibits} />
            </div>
            <div ref={section => (this.right = section)}>
              <Pedistal title="Right Pedistal" exhibits={shortPedExhibits} />
            </div>

            <Rail position="right" className="tablet or lower hidden">
              <Sticky context={contextRef} offset={50}>
                <Segment inverted>
                  <Header as="h3">Jump to Pedistal</Header>
                  <Button.Group vertical>
                    <Button fluid onClick={() => this.scroll(this.tall)}>
                      Tall Pedistal
                    </Button>

                    <Button fluid onClick={() => this.scroll(this.left)}>
                      Left Pedistal
                    </Button>

                    <Button fluid onClick={() => this.scroll(this.right)}>
                      Right Pedistal
                    </Button>
                  </Button.Group>
                </Segment>
              </Sticky>
            </Rail>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ExhibitList;
