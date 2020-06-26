import axios from "axios"
import{
    GET_MOVIE_LIST_ALL,
    GET_MOVIE_LIST_LIKED,
    GET_MOVIE_LIST_BLOCKED,
    MOVIE_LIST_SORT,
    MOVIE_LIST_CHANGE_PAGE,
    MOVIE_LIST_LIKED_ADD,
    MOVIE_LIST_LIKED_DELETE,
    MOVIE_LIST_BLOCKED_ADD,
    MOVIE_LIST_BLOCKED_DELETE,
    } from '../action/types'


export const moviesFetchAction = () => (dispatch, getState) => {
    try{
        const page_current = getState().page_number
        const page_blocked = getState().movies_blocked
        const page_licked = getState().movies_liked

        let movie_list_current = getState().movies_total
        const URL = "https://api.themoviedb.org/3/movie/popular?api_key=adbe3118bf475a31215c5e428fb035ce&language=en-US&page=' "+ page_current

        axios(URL).then(data =>{
            let total_movies = data.data.results
            //todo
            //logic here to filter out the blocked/liked list
            
            dispatch({
                type: GET_MOVIE_LIST,
                movie_list: total_movies
            })
        })
        
    }
    catch (error){
        console.log("error when fetching",error)
    }
}


//actions here to do every function
//example
//export const sort = type => (dispatch, getState) => {}
//export const nextPage =() => (dispatch, getState) => {}