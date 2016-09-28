import http from 'http'
import url from 'url'

import routes from './routes'
import { headers } from './utils'

const port = process.env.PORT || 8000

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const match = routes.get(pathname)

  if (match.handler) {
    match.handler(req, res, match.params)

  } else {
    res.writeHead(404, headers.json)
    res.end(JSON.stringify(new Error('Resource not found')))
  }
})

server.listen(port, () => console.log(`Server listening on port ${port}`))

