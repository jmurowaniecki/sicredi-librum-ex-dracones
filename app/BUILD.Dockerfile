FROM lambdadeveloper/sicredi:bloated

LABEL maintainer="John Murowaniecki <john@compilou.com.br>"
LABEL codeAuthor="John Murowaniecki <john@compilou.com.br>"

WORKDIR /application

FROM scratch AS latest

WORKDIR /
COPY --from=0 /application/app/dist /
