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

//这是stage2分支
//张博叫二狗子

//v1.0 ok


//一年后，出现新的版本