import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuList, MenuItem } from "@material-ui/core";

class Navigation extends Component {
  render() {
    return (
      <MenuList>
        <MenuItem component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem component={Link} to="/movieslist">
          Movie List
        </MenuItem>
        <MenuItem component={Link} to="/likedlist">
          Movie List of Liked
        </MenuItem>
        <MenuItem component={Link} to="/blockedlist">
          Movie List of Blocked
        </MenuItem>
      </MenuList>
    );
  }
}

export default Navigation;
