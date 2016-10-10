import React from 'react'

import { Route, IndexRedirect } from 'react-router'

import { Root, Opportunities } from './views'

// TODO: Add login and logout
export default (
  <Route path="/" component={Root}>
    <IndexRedirect to="/opportunities" />
    <Route path="/opportunities" component={Opportunities} />
  </Route>
)
