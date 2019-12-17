import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

// this configuration can be viewed on redux documentation as well.

const middleware = [logger]

// we spread out because it helps to add different middlewares to middleware variable without 
//changing anything in the store

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;