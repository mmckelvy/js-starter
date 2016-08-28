import httpHash from 'http-hash';
import basicStatic from 'basic-static';

import renderView from './views/render-view';

const routes = httpHash();
const serveStatic = basicStatic({
  cache: 'max-age=31536000',
  compress: true,
});

// Any route should render the index page and let the client take it from there.
routes.set('*', (req, res) => renderView(req, res, 'index.html'));
routes.set('/build/client.js', serveStatic);

export default routes;
