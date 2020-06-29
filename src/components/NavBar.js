import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import Route from "react-router-dom/Route";
import MovieList from "./MovieList";
import LikedList from "./LikedList";
import BlockedList from "./BlockedList";
import Error from "./Error";
import Layout from "../Layout";
import "./MovieList.css";

class NavBar extends Component {
  render() {
    return (
      <Router>
        {/* <h1>Our Top Rated Movies List</h1> */}
        {/* <div className="NavBar"> */}
        {/* <Navigation /> */}
        <Layout>
          <Switch>
            {/* switch matches the very first route and skip the rest  */}
            <Route
              class="main-movieList"
              path="/"
              exact
              render={() => {
                return <h1>This is the Home Page</h1>;
              }}
            />
            <Route path="/movieslist" exact strict component={MovieList} />
            <Route path="/likedlist" exact strict component={LikedList} />
            <Route path="/blockedlist" exact strict component={BlockedList} />
            <Route component={Error} />
          </Switch>
        </Layout>
        {/* </div> */}
      </Router>
    );
  }
}

export default NavBar;
