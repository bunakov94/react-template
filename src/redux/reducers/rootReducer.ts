import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { postsReducer } from 'redux/reducers/postsReducer/postsReducer'

export const history = createBrowserHistory()

export const rootReducer = combineReducers({
  router: connectRouter(history),
  posts: postsReducer,
})
