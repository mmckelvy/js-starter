import { headers } from '../utils'

// return the contents of the opps.js file.
export default function fetchOpps(req, res) {
  res.writeHead(200, headers.json)
  res.end('hello')
}
