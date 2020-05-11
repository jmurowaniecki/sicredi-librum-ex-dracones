FROM lambdadeveloper/sicredi:bloated

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR /application/app

RUN yarn install

RUN yarn run build

FROM scratch AS latest

WORKDIR /
COPY --from=0 /application/app/dist/site /

RUN cp index.html index.php

CMD [ "sh" ]
