'use strict'

import React     from 'react'
import ReactDOM  from 'react-dom'
import App       from './App'

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React
}

ReactDOM.render( React.createElement( App ), document.getElementById('app') )
