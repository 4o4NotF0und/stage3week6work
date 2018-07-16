import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import store from './store/index.js'

import App from './App.jsx'

function show () {
  ReactDOM.render(<App />, document.getElementById('root'))
}

show ()
//stage1分支
store.subscribe(show)
