import { combineReducers } from 'redux'

import userReducer from './userReducer.js'

const reducers = {
    user: userReducer,
}

export default combineReducers(reducers)
