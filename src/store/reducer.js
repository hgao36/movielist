import{
GET_MOVIE_LIST_ALL,
MOVIE_LIST_CHANGE_PAGE,
MOVIE_LIST_LIKED_ADD,
MOVIE_LIST_BLOCKED_ADD,
} from '../action/types'


const initialState = {
    movie_list: [],
    movies_liked: [],
    movies_blocked: [],
    page_number: 1
  };



export default (state = initialState, action) =>{
    switch (action.type) {
        //all the logic will be executed in the Actions.js in /action folder, it will return the right action.movie_list when corresponding 
        //action type is called.
        case GET_MOVIE_LIST_ALL:
            const newState = state
            newState.movie_list = action.data;
            return{
                newState
            }
        case MOVIE_LIST_LIKED_ADD:
            return{
                ...state,
                movies_liked: action.payload
            }
        case MOVIE_LIST_BLOCKED_ADD:
            return{
                ...state,
                movies_blocked: action.payload
            }
        case MOVIE_LIST_CHANGE_PAGE:
            return{
                //test
                ...state,
                movie_list:action.payload
            }
        break;
        default:
            return state;
    }
}