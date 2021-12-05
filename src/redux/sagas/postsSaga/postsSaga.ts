import {
  call,
  CallEffect,
  fork,
  ForkEffect,
  put,
  PutEffect,
  SagaReturnType,
  take,
  TakeEffect,
} from 'redux-saga/effects'

import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router'
import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess } from 'redux/actions/postActions/postActions'
import { PostsActions } from 'redux/types/types'
import { Http, ResponseDto } from 'utils/http'
import { IPost } from 'models/IPost'

const getPosts = () => Http.get<IPost[]>('/todos')

function* postsWorker(): PostsWorker {
  yield put(fetchPostsRequest())
  try {
    const { data: posts }: ResponseDto<IPost[]> = yield call(getPosts)
    yield put(
      fetchPostsSuccess({
        posts,
      })
    )
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchPostsFailure({
          error: e.message,
        })
      )
    }
  }
}

export function* postsWatcher(): PostsWatcher {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE)
    if (action.payload.location.pathname.endsWith('/')) {
      yield fork(postsWorker)
    }
  }
}

type PostsWorker = Generator<PutEffect<PostsActions> | CallEffect<ResponseDto<IPost[]>>, void, ResponseDto<IPost[]>>

type PostsWatcher = Generator<ForkEffect<SagaReturnType<() => PostsWorker>> | TakeEffect, void, LocationChangeAction>
