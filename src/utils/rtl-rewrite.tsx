import React, { FC } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from 'redux/reducers/rootReducer'

type Props<T> =
  | {
      initialState: T
      store?: Store<T>
      renderOptions?: unknown
    }
  | Record<string, never>

function render<T>(
  ui: JSX.Element,
  { initialState, store = createStore(rootReducer, initialState), ...renderOptions }: Props<T> = {}
) {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }
