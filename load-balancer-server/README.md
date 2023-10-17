# Named Proxy Server

Start three separate nodejs processes:

```sh
node index.js 5000
node index.js 7000
node index.js 9000
```

Run the proxy server:

```sh
docker run --name nginx-test \
  -p 8080:80 \
  -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro \
  --rm \
  nginx
```

Notice nginx using the host header to determine the target proxied app.