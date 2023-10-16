# Simple Proxy Server

Start the nodejs server:

```sh
node index.js
```

Run proxy server:

```sh
docker run --name nginx-test \
  -p 8080:80 \
  -v /Users/allison/Documents/repos/nginx-tests/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v /Users/allison/Documents/repos/nginx-tests/data:/data:ro \
  --rm \
  nginx
```

Notice the path rewrite that removes /api from the original request.