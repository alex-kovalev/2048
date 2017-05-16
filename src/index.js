import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'

import App from './App'
import configureStore from './store'
import {listenToKeyboard} from './actions/input'

require('../styles/_index.scss')

const store = configureStore()
listenToKeyboard(store)
store.dispatch({type: 'GEN_TILE'})
store.dispatch({type: 'GEN_TILE'})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

