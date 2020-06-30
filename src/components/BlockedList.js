import React, { Component } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import {connect} from 'react-redux'
import {movieListUnBlock,movieListLikedAdd} from '../action/actions'
const BlockedList = (props) => {



  const handleUnblock = (movie) => {
    let unblock_movies = [...props.movies_blocked]
    movie.blocked = false
    let temp = unblock_movies.filter(tempMovie => tempMovie.id !== movie.id)
    props.unblock(temp)
  }

  const handleLike = (movie) => {
    let addLiked_movies = [...props.movies_liked]
    movie.blocked = false
    movie.liked = true
    let unblock_movies = [...props.movies_blocked]
    let temp = unblock_movies.filter(tempMovie => tempMovie.id !== movie.id)
    addLiked_movies.push(movie)
    props.addToLikedList(addLiked_movies)
    props.unblock(temp)
  }


  return (
    <div class="main-movieList">
      <div>This is the Blocked List.</div>
       <div class="grid-container">
        {props.movies_blocked.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            overview={movie.overview}
            liked={movie.liked}
            blocked={movie.blocked}
            movie={movie}
            blocked={movie.blocked}
            handleUnblock={handleUnblock}
            handleLike={handleLike}
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
    unblock:(temp)=>{
      const action = movieListUnBlock(temp)
      dispatch(action)
    },
    addToLikedList:(addLiked_movies)=>{
      const action = movieListLikedAdd(addLiked_movies);
      dispatch(action)
    },
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(BlockedList);