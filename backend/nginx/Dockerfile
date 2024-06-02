FROM nginx

RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf .htpasswd /etc/nginx/conf.d/

CMD ["nginx","-g","daemon off;"]