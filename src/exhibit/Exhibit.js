import React from "react";
import { Item, Image } from "semantic-ui-react";
import Thingiverse from "../Extras/ThingiverseDisplay";
import Youtube from "../Extras/YoutubeDisplay";
import "./Exhibit.css";

export default function Exhibit({ name, description, image, thingiverse, youtube }) {
  let imageComponent = image ? <Image src={require(`../assets/images/exhibits/${image}`)} height={200} /> : null;

  let thingDetails = thingiverse ? <Thingiverse {...thingiverse} /> : null;

  let youtubeDetails = youtube
    ? <Item.Extra>
        <Youtube {...youtube} />
      </Item.Extra>
    : null;

  return (
    <Item>
      {imageComponent}
      <Item.Content>
        <Item.Header as="h3">
          {name}
        </Item.Header>
        <Item.Description>
          {description}
        </Item.Description>
        <Item.Extra>
          {thingDetails}
          {youtubeDetails}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
