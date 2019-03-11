import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import loggedUser from './reducers/loggedUserReducer'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    loggedUser: loggedUser
})
//注入中间件
const middleware = [thunkMiddleware];
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middleware)
))

export default store