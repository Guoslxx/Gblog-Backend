import { createStore, combineReducers } from 'redux'
import loggedUser from './reducers/loggedUser'

const reducers = combineReducers({
    loggedUser: loggedUser
})

const store = createStore(reducers)

export default store