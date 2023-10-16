const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  console.log('request: ', req.method, req.url);
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Base' }));
  } else if (req.url === '/route1') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Route 1' }));
  } else if (req.url === '/route2') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Route 2' }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const port = 9000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
