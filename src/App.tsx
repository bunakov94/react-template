import React from 'react'
import { useSelector } from 'react-redux'
import { PostsState } from 'redux/types/types'
import { RootState } from 'redux/store'

export const App = (): JSX.Element => {
  const { pending, posts, error } = useSelector<RootState, PostsState>(state => state.posts)

  if (pending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts?.map((todo, index) => (
          <li key={todo.id}>{`${index + 1} ${todo.title}`}</li>
        ))}
      </ul>
    </>
  )
}
