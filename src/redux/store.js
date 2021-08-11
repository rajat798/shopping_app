import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import rootReducer from './root-reducer'


const middlewares = [logger] //all the middlewares that u have

const store = createStore(rootReducer,applyMiddleware(...middlewares))

export default store;