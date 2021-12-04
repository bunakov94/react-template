import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { IPost } from '../../../models/IPost'
import { fetchPostsFailure, fetchPostsSuccess } from '../../actions/postActions/postActions'
import { postTypes } from '../../ActionTypes/postTypes'

const getPosts = () => axios.get<IPost[]>('https://jsonplaceholder.typicode.com/todos')

export interface Response {
  data: IPost[]
}

function* fetchPostsSaga(): Generator<unknown, void, Response> {
  try {
    const response = yield call(getPosts)
    yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    )
  } catch (e: unknown) {
    if (e instanceof Error) {
      yield put(
        fetchPostsFailure({
          error: e.message,
        })
      )
    }
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)])
}

export default postsSaga
