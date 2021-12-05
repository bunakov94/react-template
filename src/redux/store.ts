import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import { rootReducer, history } from 'redux/reducers/rootReducer'
import { rootSaga } from 'redux/sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(routerMiddleware(history), sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
