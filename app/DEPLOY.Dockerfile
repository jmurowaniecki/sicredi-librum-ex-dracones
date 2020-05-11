FROM lambdadeveloper/sicredi:bloated

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR /application

RUN yarn build

FROM scratch AS deploy

WORKDIR /
COPY --from=0 /application/app/dist/site /
RUN cp index.html index.php
