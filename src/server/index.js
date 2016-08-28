import path from 'path';
import http from 'http';
import url from 'url';

import routes from './routes';
import headers from './headers';

const port = process.env.PORT || 5000;

const server = http.createServer(function(req, res) {
  const pathname = url.parse(req.url).pathname;
  const match = routes.get(pathname);

  if (match.handler) {
    match.handler(req, res, match.params);

  } else {
    res.writeHead(404, headers.json);
    res.end(JSON.stringify(new Error('Resource not found')));
  }
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
