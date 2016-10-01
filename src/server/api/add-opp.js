import fs from 'fs'
import path from 'path'
import parseBody from 'parse-body'
import uuid from 'node-uuid'

import opps from '../opps.json'
import { sendError } from 'server/utils'

export default function addOpp(req, res) {
  // Parse the request body
  parseBody(req, 1e6, (parseErr, newOpp) => {
    if (parseErr) {
      sendError(res, 500)
    } else {
      // Create a new opp from the POST body
      newOpp.id = uuid.v4()
      // Get the existing opps
      const existingOpps = opps.opps.slice()
      // Add the new opp
      const updatedOpps = existingOpps.concat([newOpp])
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
