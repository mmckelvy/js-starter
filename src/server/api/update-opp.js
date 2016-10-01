import fs from 'fs'
import path from 'path'
import parseBody from 'parse-body'

import opps from '../opps.json'
import { sendError } from 'server/utils'

export default function updateOpp(req, res) {
  // Parse the request body
  parseBody(req, 1e6, (parseErr, updatedOpp) => {
    if (parseErr) {
      sendError(res, 500)
    } else {
      // Get the existing opps
      const updatedOpps = opps.opps.slice()
      // Find the appropriate opp
      const index = updatedOpps.findIndex(opp => opp.id === updatedOpp.id)
      // Update the opp
      updatedOpps.splice(index, 1, updatedOpp)

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
  })
}
