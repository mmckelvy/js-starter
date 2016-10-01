import httpHash from 'http-hash'
import basicStatic from 'basic-static'

import { renderView } from './utils'
import { fetchOpps, addOpp, updateOpp, deleteOpp } from './api'

const routes = httpHash()

const serveBundle = basicStatic({
  cache: 'max-age=31536000',
  compress: true,
})

const serveAssets = basicStatic({
  cache: 'max-age=31536000',
  compress: true,
  rootDir: __dirname
})

// Any route should render the index page and let the client take it from there.
routes.set('*', (req, res) => {
  renderView(req, res, 'index.html')
})

// Api
routes.set('/api/opps', (req, res) => {
  if (req.method === 'GET') {
    fetchOpps(req, res)
  } else if (req.method === 'POST') {
    addOpp(req, res)
  } else if (req.method === 'PUT') {
    updateOpp(req, res)
  }
})

routes.set('/api/opps/:id', (req, res, params) => {
  if (req.method === 'DELETE') {
    deleteOpp(req, res, params)
  }
})

// Static assets
routes.set('/build/*', serveBundle)
routes.set('/assets/*', serveAssets)

export default routes
