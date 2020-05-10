FROM nginx:1.17.3-alpine
LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

LABEL name="lambdadeveloper/proxy"
LABEL description="Simple proxy image."

COPY nginx.conf /etc/nginx/nginx.conf
COPY setup.conf /etc/nginx/setup.conf
COPY hosts.conf /etc/nginx/conf.d/default.conf
COPY error.html /usr/share/nginx/html/50x.html

CMD ["nginx", "-g", "daemon off;"]
