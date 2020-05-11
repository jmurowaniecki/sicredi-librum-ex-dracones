FROM lambdadeveloper/compilouit:node

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR /application
COPY ./ /application

RUN yarn install

CMD ["npm", "run-script", "λ"]
