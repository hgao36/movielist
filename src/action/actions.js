import axios from "axios"
import{
    GET_MOVIE_LIST_ALL,
    MOVIE_LIST_CHANGE_PAGE,
    MOVIE_LIST_LIKED_ADD,
    MOVIE_LIST_BLOCKED_ADD,
    } from '../action/types'


// export const moviesFetchAction = () => (dispatch, getState) => {
//     try{
//         const page_current = getState().page_number
//         const API_KEY="adbe3118bf475a31215c5e428fb035ce"
//         const URL = 
//         "https://api.themoviedb.org/3/discover/movie?api_key=" 
//         + 
//         API_KEY 
//         + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + 
//         page_current;
        
//         axios(URL).then(data =>{
//             let total_movies = data.data.results
//             dispatch({
//                 type: GET_MOVIE_LIST_ALL,
//                 payload: total_movies
//             })
//         })
        
//     }
//     catch (error){
//         console.log("error when fetching",error)
//     }
// }


// export const movieListLikedAdd = movies => (dispatch, getState) =>{
//     const moviesLiked = getState().movies_liked
//     let moviesBlocked = getState().movies_blocked
//     //might need validation here for exsisting liked movie(potential bug)
    
//     //delete from blockedList if you hit like button for a movie that already in the blocked list
//     if(moviesBlocked.some(tempMovie => tempMovie.id === movies.id)){
//         moviesBlocked = moviesBlocked.filter(tempMovie => tempMovie.id !== movies.id)

//         dispatch({
//             type: MOVIE_LIST_BLOCKED_ADD,
//             payload: moviesBlocked
//         })
//     }
//     else{
//         //no else
//         //add this movie to likedList no matter what
//     }

//     moviesLiked.push(movies)
//     dispatch({
//         type: MOVIE_LIST_LIKED_ADD,
//         payload: moviesLiked
//     })
// }

// export const movieListBlockedAdd = movies => (dispatch, getState) =>{
//     const moviesBlocked = getState().movies_blocked
//     let moviesLiked = getState().movies_liked

//     //might need validation here for exsisting blocked movie(potential bug)


//     //delete from likedList if you hit block button for a movie that already in the liked list
//     if(moviesLiked.some(tempMovie => tempMovie.id === movies.id)){
//         moviesLiked = moviesLiked.filter(tempMovie => tempMovie.id !== movies.id)

//         dispatch({
//             type: MOVIE_LIST_LIKED_ADD,
//             payload: moviesLiked
//         })
//     }
//     else{
//         //no else
//         //add this movie to likedList no matter what
//     }

//     moviesBlocked.push(movies)
//     dispatch({
//         type: MOVIE_LIST_BLOCKED_ADD,
//         payload: moviesBlocked
//     })

// }

// export const movieListLikedDelete = movies => (dispatch, getState) =>{
//     let moviesLiked = getState().movies_liked
//     moviesLiked.filter(tempMovie => tempMovie.id !== movies.id)
//     dispatch({
//         type:MOVIE_LIST_LIKED_ADD,
//         payload:moviesLiked
//     })
// }

// export const movieListBlockedDelete = movies => (dispatch, getState) =>{
//     let moviesBlocked = getState().movies_blocked
//     moviesBlocked.filter(tempMovie => tempMovie.id !== movies.id)
//     dispatch({
//         type:MOVIE_LIST_BLOCKED_ADD,
//         payload:moviesBlocked
//     })
// }

// export const pageNext = () => (dispatch, getState) =>{
//     const currentPage = getState().page_number
//     //might need some kind of validation if bugs appear
//     dispatch({
//         type: MOVIE_LIST_CHANGE_PAGE,
//         payload: currentPage +1
//     })
// }

// export const prevPage = () => (dispatch, getState) =>{
//     const currentPage = getState().page_number
//     if( getState().page_number >=2 ){
//         dispatch({
//             type: MOVIE_LIST_CHANGE_PAGE,
//             payload: prevPage - 1
//         })
//     }
// }



export const initListAction = (data) => ({
    type:GET_MOVIE_LIST_ALL,
    data
})