FROM lambdadeveloper/compilouit:angular

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR /app
COPY ./package.json /app

RUN yarn install --verbose

CMD ["yarn", "start"]
