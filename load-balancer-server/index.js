const http = require('http');

const args = process.argv.slice(2);
const port = args[0] || 9000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const timestamp = new Date().toUTCString();
  const pid = process.pid;

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: `Hello from process ${pid} at port ${port}` }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: `Not found from process ${pid} at port ${port}` }));
  }

  console.log(`[${timestamp}]@${req.headers.host} request: ${req.method} ${req.url} (${res.statusCode})`);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
