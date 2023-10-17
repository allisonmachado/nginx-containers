const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const timestamp = new Date().toUTCString();
  const pid = process.pid;

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: `Base: PID[${pid}]` }));
  } else if (req.url === '/route1') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: `Route 1: PID[${pid}]` }));
  } else if (req.url === '/route2') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: `Route 2: PID[${pid}]` }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: `Not Found: PID[${pid}]` }));
  }

  console.log(`[${timestamp}]@${req.headers.host} request: ${req.method} ${req.url} (${res.statusCode})`);
});

const args = process.argv.slice(2);
const port = args[0] || 9000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
