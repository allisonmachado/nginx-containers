
docker run --name nginx-test \
  -p 8080:80 \
  -v /Users/allison/Documents/repos/nginx-tests/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v /Users/allison/Documents/repos/nginx-tests/data:/data:ro \
  --rm \
  nginx
