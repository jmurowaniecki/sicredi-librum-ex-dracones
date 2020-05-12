FROM lambdadeveloper/compilouit:node

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR       /worker
COPY ./worker /worker

RUN yarn install
RUN yarn cache clean

CMD [ "yarn", "start" ]
