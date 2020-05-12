FROM lambdadeveloper/sicredi:bloated

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR /application/app

RUN yarn install

RUN yarn run build



FROM nginx:alpine AS latest

COPY --from=0 /application/app/dist/site /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM

CMD [ "nginx", "-g", "daemon off;" ]
