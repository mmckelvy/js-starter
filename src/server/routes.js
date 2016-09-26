import httpHash from 'http-hash'
import basicStatic from 'basic-static'

import { renderView } from './utils'

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
routes.set('*', (req, res) => renderView(req, res, 'index.html'))

// Static assets
routes.set('/build/*', serveBundle)
routes.set('/assets/*', serveAssets)

export default routes
