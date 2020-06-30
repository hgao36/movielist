import{
    GET_MOVIE_LIST_ALL,
    MOVIE_LIST_LIKED_ADD,
    MOVIE_LIST_BLOCKED_ADD,
    MOVIE_LIST_UNLIKE,
    MOVIE_LIST_UNBLOCK,

    } from '../action/types'

export const initListAction = (data) => ({
    type:GET_MOVIE_LIST_ALL,
    data
})

export const movieListLikedAdd = (data) =>({
    type:MOVIE_LIST_LIKED_ADD,
    data
})

export const movieListBlockedAdd = (data) =>({
    type:MOVIE_LIST_BLOCKED_ADD,
    data
})

export const movieListUnlike = (data) =>({
    type:MOVIE_LIST_UNLIKE,
    data
})

export const movieListUnBlock = (data) =>({
    type:MOVIE_LIST_UNBLOCK,
    data
})
