FROM nginx:latest

COPY html /usr/sharer/nginx/html

ENTRYPOINT [ "/docker-entrypoing.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]