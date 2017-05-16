import { combineReducers } from 'redux'

import boardReducer from './boardReducer'
// import userInputReducer from './userInputReducer'


const rootReducer = combineReducers({
    board: boardReducer,
    // userInput: userInputReducer
})

export default rootReducer
