docker build . -t comiditapp-nginx:test && \
docker run --rm --name comiditapp-container -p 8080:80 comiditapp-nginx:test