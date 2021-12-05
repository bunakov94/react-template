import {
  FetchPostsFailure,
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsSuccessPayload,
} from 'redux/types/types'
import { postTypes } from 'redux/ActionTypes/postTypes'

export const fetchPostsRequest = (): FetchPostsRequest => ({
  type: postTypes.FETCH_POST_REQUEST,
})

export const fetchPostsSuccess = (payload: FetchPostsSuccessPayload): FetchPostsSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload,
})

export const fetchPostsFailure = (payload: FetchPostsFailurePayload): FetchPostsFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload,
})
