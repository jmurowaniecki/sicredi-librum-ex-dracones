FROM lambdadeveloper/compilouit:angular

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR    /web
COPY ./web /web

RUN yarn install
RUN yarn cache clean
RUN yarn build

CMD [ "yarn", "start" ]
