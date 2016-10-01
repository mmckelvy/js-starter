import React from 'react'

import { Route, IndexRoute } from 'react-router'

import { Root, Opportunities } from './views'

// TODO: Add login
export default (
  <Route path="/" component={Root}>
    <IndexRoute path="opportunities" component={Opportunities} />
  </Route>
)
