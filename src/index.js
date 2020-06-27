import React from "react";
import ReactDOM from "react-dom";
// import MovieList from "./MovieList";
import NavBar from "./components/NavBar";
import {Provider} from 'react-redux'
import store from './store'


ReactDOM.render(
<Provider store = {store}>
<NavBar />
</Provider>,
document.getElementById("root"));
