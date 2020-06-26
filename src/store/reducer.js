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


const initialState = {
    movie_list: [],
    movies_current: {},
    movies_liked: [],
    movies_blocked: [],
    loading: false,
    button_like: "Like",
    button_sort: "original_title.desc",
    order_ascending: true,
    order_descending: true,
    page_number: 1,
    total_pages: 500,
  };

export default (state = initialState, action) =>{
    return state;
}