import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import "./Header.css";
class Header extends Component {
  render() {
    const location = this.props.location.pathname;

    return (
      <Menu fixed="top" inverted>
        <Menu.Item header>Santa Fe 3D Printing Exhibit</Menu.Item>
        <Menu.Item as={Link} to="/" active={location === "/"}>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/exhibits" active={location === "/exhibits"}>
          Exhibits
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(Header);
