import { headers } from '../utils'
import opps from '../opps.json'

// return the contents of the opps.js file.
export default function fetchOpps(req, res) {
  res.writeHead(200, headers.json)
  res.end(JSON.stringify(opps))
}
