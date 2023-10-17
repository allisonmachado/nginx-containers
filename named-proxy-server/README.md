# Named Proxy Server

Create the following entry in your `/etc/hosts` file:

```
127.0.0.1 app.train.local cms.train.local id.train.local
```

Start two separate nodejs processes:

```sh
node index.js 9000
node index.js 7000
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