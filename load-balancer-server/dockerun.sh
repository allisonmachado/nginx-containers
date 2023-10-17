
docker run --name nginx-test \
  -p 8080:80 \
  -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro \
  --rm \
  nginx
