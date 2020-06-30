import{
GET_MOVIE_LIST_ALL,
MOVIE_LIST_CHANGE_PAGE,
MOVIE_LIST_LIKED_ADD,
MOVIE_LIST_BLOCKED_ADD,
MOVIE_LIST_UNLIKE,
MOVIE_LIST_UNBLOCK,
} from '../action/types'


const initialState = {
    movie_list: [],
    movies_liked: [],
    movies_blocked: [],
    page_number: 0,
  };



export default (state = initialState, action) =>{
    switch (action.type) {
        //all the logic will be executed in the Actions.js in /action folder, it will return the right action.movie_list when corresponding 
        //action type is called.
        case GET_MOVIE_LIST_ALL:
            const newState = state
            newState.movie_list = [...newState.movie_list ,action.data];
            return newState
            
        case MOVIE_LIST_LIKED_ADD:
            const newState2 = {...state, movies_liked: action.data}
            return newState2

            
        case MOVIE_LIST_BLOCKED_ADD:
            const newState3 = {...state, movies_blocked: action.data}
            return newState3

            
        case MOVIE_LIST_UNLIKE:
            const newState4 = {...state, movies_liked: action.data}
            return newState4


        case MOVIE_LIST_UNBLOCK:
            const newState5 = {...state, movies_blocked: action.data}
            return newState5
        
        case "addPageNumber":
            return {
                ...state,
                page_number: state.page_number + 1
            }
        case "CHANGE_LIKE":
            const newState6 = {...state, movie_list: action.data}
            return newState6
            
        default:
            return state;
    }
}