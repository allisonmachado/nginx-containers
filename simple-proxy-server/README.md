# Simple Proxy Server

Start the nodejs server:

```sh
node index.js
```

Run proxy server:

```sh
docker run --name nginx-test \
  -p 8080:80 \
  -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v $PWD/data:/data:ro \
  --rm \
  nginx
```

Notice the path rewrite that removes /api from the original request.