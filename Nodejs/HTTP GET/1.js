// server.js

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/data') {
    let body = '';

    // collect data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // when done, respond
    req.on('end', () => {
      console.log('Received:', body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Data received!', yourData: JSON.parse(body) }));
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
