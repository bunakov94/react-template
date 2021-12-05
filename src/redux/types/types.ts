import { IPost } from 'models/IPost'
import { postTypes } from 'redux/ActionTypes/postTypes'

export interface PostsState {
  pending: boolean
  posts: IPost[]
  error: string | null
}

export type FetchPostsSuccessPayload = Pick<PostsState, 'posts'>

export type FetchPostsFailurePayload = Pick<PostsState, 'error'>

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST
}

export interface FetchPostsSuccess {
  type: typeof postTypes.FETCH_POST_SUCCESS
  payload: FetchPostsSuccessPayload
}

export interface FetchPostsFailure {
  type: typeof postTypes.FETCH_POST_FAILURE
  payload: FetchPostsFailurePayload
}

export type PostsActions = FetchPostsRequest | FetchPostsSuccess | FetchPostsFailure
