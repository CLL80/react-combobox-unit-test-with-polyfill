import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Example from 'Example'

/**
 * All props defined in /containers/Root.js are available here
 **/
export default (store) => (
  <Route path='/'>
    <IndexRoute component={Example} />
  </Route>
)
