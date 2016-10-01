import React from 'react'

import { Route, IndexRoute } from 'react-router'

import { Root, Opportunities } from './views'

// TODO: Add login and logout
export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Opportunities} />
  </Route>
)
