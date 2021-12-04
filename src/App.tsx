import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsRequest } from './redux/actions/postActions/postActions'
import { PostsState } from './redux/types/types'
import { RootState } from './redux/store'

const App = () => {
  const dispatch = useDispatch()
  const { pending, posts, error } = useSelector<RootState, PostsState>(state => state.posts)

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [dispatch])

  if (pending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <div>
      {posts?.map((todo, index) => (
        <div key={todo.id}>{`${index + 1} ${todo.title}`}</div>
      ))}
    </div>
  )
}

export default App
