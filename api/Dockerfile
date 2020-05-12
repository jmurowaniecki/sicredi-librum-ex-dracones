FROM lambdadeveloper/compilouit:node

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR /api
COPY ./package.json /api

RUN yarn install --verbose

CMD ["npm", "run-script", "λ"]
