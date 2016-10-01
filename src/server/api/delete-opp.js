import fs from 'fs'
import path from 'path'

import opps from '../opps.json'
import { sendError } from 'server/utils'

export default function deleteOpp(req, res, params) {
  // get the existing opps
  const updatedOpps = opps.opps.slice()
  // Find the appropriate opp
  const index = updatedOpps.findIndex(opp => opp.id === params.id)
  // Remove the opp
  updatedOpps.splice(index, 1)
  // Convert to JSON
  const updated = JSON.stringify({opps: updatedOpps})
  // Write to file
  fs.writeFile(path.join(__dirname, '../opps.json'), updated, 'utf8', (writeErr) => {
    if (writeErr) {
      sendError(res, 500)
    } else {
      res.end('success')
    }
  })
}
