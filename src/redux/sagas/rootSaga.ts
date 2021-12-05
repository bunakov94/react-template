import { all, fork } from 'redux-saga/effects'
import { postsWatcher } from 'redux/sagas/postsSaga/postsSaga'

export function* rootSaga() {
  yield all([fork(postsWatcher)])
}
