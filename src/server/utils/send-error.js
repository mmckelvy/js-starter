import http from 'http'

import headers from './headers'

/**
* @function sendError
*
* Sets appropriate header and error message based on an http status code. Sends the response to the
* client.
*
* @param {Object} res -- Usual Node response object.
* @param {Number} statusCode -- http status code (defaults to 500).
*
* @return {undefined} Sends a response back to the client.
*/
export default function sendError(res, statusCode = 500) {
  const error = {message: http.STATUS_CODES[statusCode]}

  res.writeHead(statusCode, headers.json)
  res.end(JSON.stringify(error))
}
