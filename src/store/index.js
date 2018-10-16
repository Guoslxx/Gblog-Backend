import { createStore, combineReducers,applyMiddleware } from 'redux'
import loggedUser from './reducers/loggedUserReducer'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux';
const reducers = combineReducers({
    loggedUser: loggedUser
})
//注入中间件
const middleware = [routerMiddleware,thunkMiddleware];
const store = createStore(reducers,applyMiddleware(...middleware))

export default store