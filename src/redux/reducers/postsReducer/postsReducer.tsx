import { PostsActions, PostsState } from 'redux/types/types'
import { postTypes } from 'redux/ActionTypes/postTypes'

export const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
}

// eslint-disable-next-line default-param-last
export const postsReducer = (state = initialState, action: PostsActions): PostsState => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null,
      }
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}
