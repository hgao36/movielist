import React, { Component } from "react";
import store from "../store/index.js";
import {initListAction}  from "../action/actions.js";
import axios from 'axios'

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log("this.state")
    console.log(this.state);
    }

  componentDidMount(){
    const page_current = this.state.page_number
    const API_KEY="adbe3118bf475a31215c5e428fb035ce"
    const URL = 
    "https://api.themoviedb.org/3/discover/movie?api_key=" 
    + 
    API_KEY 
    + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + 
    page_current;  
    axios(URL).then(data =>{
        let total_movies = data.data.results
        const action = initListAction(total_movies)
        store.dispatch(action)
        console.log("this.state movieList after axios")
        console.log(this.state.movie_list)
    })
        
  }
  render() {
    return <div> MovieList! {}</div>;
  }
}