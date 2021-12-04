import { combineReducers } from 'redux'
import postReducer from './postsReducer/postsReducer'

const rootReducer = combineReducers({
  posts: postReducer,
})

export default rootReducer
