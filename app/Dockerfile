FROM lambdadeveloper/compilouit:angular

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

COPY ./ /application
WORKDIR /application/app

RUN yarn install

CMD ["yarn", "start"]
