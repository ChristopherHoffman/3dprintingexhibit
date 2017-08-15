import React from "react";
import { Button, Image, Segment, Icon } from "semantic-ui-react";
import icon from "../assets/images/youtube.svg";

const youtube = ({ title, author, link }) => {
  if (!(title && author && title !== "" && author !== "")) {
    return null;
  }

  return (
    <Segment style={{ padding: "5px" }}>
      <Image src={icon} size="mini" floated="left" verticalAlign="middle" ui shape="rounded" />
      <strong>
        {title}
      </strong>
      {author &&
        <span>
          &nbsp;by {author}
        </span>}
      {link &&
        <Button
          as="a"
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          color="youtube"
          style={{ marginLeft: "3em" }}
        >
          Watch
          <Icon name="right chevron" />
        </Button>}
    </Segment>
  );
};

export default youtube;
