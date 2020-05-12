FROM lambdadeveloper/sicredi:bloated

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR /application/app

RUN yarn install

RUN yarn run build



FROM nginx:alpine AS latest

COPY --from=0 /application/app/dist/site             /usr/share/nginx/html
COPY --from=0 /application/app/.../heroku/nginx.conf /etc/nginx/nginx.conf

EXPOSE $PORT

STOPSIGNAL SIGTERM

CMD /bin/sh  -c "envsubst '\${PORT}' < /etc/nginx/nginx.conf > .cfg; mv .cfg /etc/nginx/nginx.conf" \
    && nginx -g "daemon off;"
