import React from "react";
import { Segment, Header, Item } from "semantic-ui-react";

export default function Pedistal({ title, exhibits }) {
  return (
    <Segment>
      <Header size="large">
        {title}
      </Header>
      <Item.Group divided>
        {exhibits}
      </Item.Group>
    </Segment>
  );
}
