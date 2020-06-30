import React, { Component } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import {connect} from 'react-redux'
import {movieListUnlike,movieListBlockedAdd} from '../action/actions'


const LikedList = (props) => {
  
  
const handleUnlike = (movie) => {
  let unlike_movies = [...props.movies_liked]
  movie.liked = false
  let temp = unlike_movies.filter(tempMovie => tempMovie.id !== movie.id)
  props.unlike(temp)
}

const handleBlock = (movie) => {
  let addBlocked_movies = [...props.movies_blocked]
  movie.blocked = true
  movie.liked = false
  let unlike_movies = [...props.movies_liked]
  let temp = unlike_movies.filter(tempMovie => tempMovie.id !== movie.id)
  addBlocked_movies.push(movie)
  props.addToBlockedList(addBlocked_movies)
  props.unlike(temp)
}


   console.log(props.movies_liked);
  return (
    <div class="main-movieList">
      <div>This is the Liked List.</div>
      <div class="grid-container">
        {props.movies_liked.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            overview={movie.overview}
            liked={movie.liked}
            movie={movie}
            blocked={movie.blocked}
            handleUnlike={handleUnlike}
            handleBlock={handleBlock}
          />
        ))}
      </div> 
    </div>
  );
};


const mapStateToProps = (state) =>{
  return{
      movie_list: state.movie_list,
      movies_liked: state.movies_liked,
      movies_blocked: state.movies_blocked,
      page_number: state.page_number
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    unlike:(temp)=>{
      const action = movieListUnlike(temp)
      console.log("dispatch now")
      console.log(action)
      dispatch(action)
    },
    addToBlockedList:(addBlocked_movies)=>{
      const action = movieListBlockedAdd(addBlocked_movies);
      dispatch(action)
    },
  }
}





export default connect(mapStateToProps,mapDispatchToProps)(LikedList);