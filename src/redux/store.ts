import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import { rootSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
