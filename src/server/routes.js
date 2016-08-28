import httpHash from 'http-hash';
import basicStatic from 'basic-static';

const routes = httpHash();
const serveStatic = basicStatic({compress: true, cache: 'max-age=31536000'});

routes.set('/', (req, res) => res.end("Hello world!"));

export default routes;
