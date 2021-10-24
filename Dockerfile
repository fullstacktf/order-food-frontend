FROM debian:11-slim
RUN apt-get update && apt-get install -y nginx ccze
EXPOSE 80
COPY entrypoint.sh /
COPY index.html /var/www/html/index.nginx-debian.html
ENTRYPOINT ["sh", "/entrypoint.sh"]
