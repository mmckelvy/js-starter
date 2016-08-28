import fs from 'fs';
import path from 'path';

import headers from '../utils/headers';
import sendError from '../utils/send-error';

export default function renderView(req, res, filename) {
  const stream = fs.createReadStream(path.join(__dirname, filename));

  stream.on('error', () => sendError(res, 500));

  res.writeHead(200, headers.html);

  stream.pipe(res);
}
