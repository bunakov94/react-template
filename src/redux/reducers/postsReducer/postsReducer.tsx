import { PostsActions, PostsState } from '../../types/types'
import { postTypes } from '../../ActionTypes/postTypes'

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, action: PostsActions) => {
  switch (action?.type) {
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
