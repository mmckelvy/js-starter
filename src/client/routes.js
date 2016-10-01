import React from 'react'

import { Route, IndexRoute } from 'react-router'

import { Root } from './views'

export default (
  <Route path="/" component={Root}>
    <Route path="opportunities" component={Opportunities} />
  </Route>
)
