**Librum ex Dracones** trata-se de um [teste de conhecimentos](https://github.com/WoopSicredi/jobs/issues/6), a demonstração pode ser [acessada aqui](#Demonstração).



[url-dockerhub]: https://hub.docker.com/repository/docker/lambdadeveloper/sicredi
[url-circleci ]: https://app.circleci.com/pipelines/github/jmurowaniecki/sicredi-librum-ex-dracones
[url-climate  ]: https://codeclimate.com/github/jmurowaniecki/sicredi-librum-ex-dracones/maintainability



[](BADGES)
[![DockerHub][ico-dockerhub]][url-dockerhub]
[![CircleCI][ico-circleci]][url-circleci]
[![Maintainability][ico-climate]][url-climate]
[![](https://img.shields.io/uptimerobot/ratio/m784961035-c260c2a20f54a8d77f8ccc72?logo=heroku&style=flat-square)](#)

<!-- ![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade/sicredi-app.herokuapp.com?logo=mozilla-firefox&publish&style=flat-square)

// Waiting for better grades (:
-->



## Primeiros passos

Você pode realizar o deploy instantâneo no Heroku sem precisar instalar nada no seu ambiente de trabalho bastando utilizar o botão abaixo:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)



## Executando o frontend

É possível executar apenas o frontend, para isso acesse a pasta `web` na raiz do projeto e execute os comandos `yarn install` para instalação das dependências e `yarn start` para inicializar a aplicação - que estará disponível em `http://localhost:4200`.



## _Instalação_

Após clonar o projeto execute o comando `make` no intuito de validar os requisitos do sistema e criar as variáveis de ambiente e, logo a seguir `make install` para montar os containers e `make launch` inicializar a aplicação.

> Obtenha mais informações sobre os comandos disponíveis executando `make help` em seu console.



### Configuração do ambiente

Após executar o comando `make install` seu ambiente deve estar parecido com os exemplos comentados abaixo:

```apache
PROJECT_NAME="Librum ex Dracones"
# Nome deste projeto.

ENVIRONMENT=dev
# Ambiente no qual estará sendo executado.

DB_DATABASE=admin
DB_USERNAME=admin
DB_PASSWORD=YW1lbm8gZG9yaW1l
DB_HOSTNAME=database
# Acesso ao banco de dad☉s

APP_URL=http://localhost
API_URL=http://api.localhost
# Endereços para direcionamento das requisições.
```



## Docker // CI/CD // QA

Os containers são atualizados sempre que houver alteração nos ramos principais do repositório e estarão disponíveis publicamente no [Docker Hub][url-dockerhub] de forma automatizada via [CircleCI][url-circleci].



## Veja alguns screenshots

[![Página interna](.../assets/screenshots.png)](.../assets/)


## Sobre
<!-- Makefile:about -->
[![linkedin ][ico-linkedin ]](https://www.linkedin.com/in/php-developer)
[![Twitter  ][ico-twitter  ]](https://twitter.com/0xD3C0D3)
[![github   ][ico-github   ]](https://github.com/jmurowaniecki)
<!-- Makefile:/about -->

Desenvolvedor apaixonado, tem fixação por quebra-cabeças e em busca constante de desafios.

<details>
  <summary>Veja mais...</summary>

  Fascinado por astronomia, física quântica, energia (e matéria) escura, inflação e destino entrópico do multiverso, alquimista e claro: coach de biohacking quântico, neuroprogramação, pseudocientista, astrólogo mentor de **η+1** desavisados.

  O author também é RPGista, guitarrista, artista marcial e atirador. Carrega a culpa de quebrar constantemente a 4ª parede com extensos monólogos.

  [![instagram][ico-instagram]](https://instagram.com/john.bmp)
</details>



## Considerações

### Sobre o ambiente de desenvolvimento

Optei por utilizar o **docker-compose** devido a facilidade e rapidez em subir um ambiente com múltiplos builds com pouca necessidade de configuração/setup inicial.

As imagens base estão disponíveis no respectivo [Docker Hub][url-dockerhub].

As ferramentas e rotinas de montagem e automação local - do ambiente de desenvolvimento - foram escritas em Bash/ShellScript/Dash e centralizadas no **Makefile**.



### Sobre o processo de Integração/Entrega

Utilizei o CircleCI devido a facilidade de uso e baixo custo operacional - outra opção seria o **AWS CodeBuild**.

Existem somente três serviços:
- **quality**, que realiza apenas o lint da aplicação e, estando fora do padrão bloqueia o processo;
- **build** etapa em que são construídos e enviados para o **Docker Hub** os containers;
- **deploy** integrado com Heroku;

> Ainda sobre o **CircleCI**, optei por salvar os containers de conveniência com as dependências devido ao custo temporal ser significativamente menor com processamento do que com transferência.
>
> **Em suma:** é mais rápido jogar todos os módulos para dentro de uma tag inflada/inchada e consumir ela do que processar as dependências sempre que necessário.



### Processo de criação

Iniciei o desenvolvimento pelo frontend utilizando **Angular 9** e **SCSS** partindo logo a seguir para os fluxos de entrega. A seguir desenvolverei a integração com o **backend** e a **API** solicitada.



## Demonstração

Acesse o [endereço da aplicação](https://sicredi-app.herokuapp.com/), digite seu nome e utilize - em qualquer ordem - as seguintes runas para acessar o índice:

![346](.../assets/runes.png)

> **Atenção:** _Caso venha a utilizar ferramentas de automatização de testes, para todos os efeitos, o valor da senha será sempre **346**._



#### // Hic svnt dracones

Este exemplo utiliza as bibliotecas [pizzicato de alemangui](https://github.com/alemangui/pizzicato) para as músicas de fundo e demais efeitos sonoros. Músicas e efeitos sonoros obtidos através de [FreeSound.org](https://freesound.org/) licenciados em sua maioria como Creative Commons ou uso particular.

As imagens foram extraídas de [PNG find](https://www.pngfind.com/) em sua maioria como licença Creative Commons ou uso particular, e foram em parte reconstituídas e modificadas artisticamente para se adequar ao design preservando a arte original.

Icon **list** made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/).

Inspiração no trabalho artístico de Diablo - UI e OST -, Rhapsody of Fire e **D&D / d⚂20**.

Nenhum plugin foi utilizado para os efeitos de paralax nos dragões - _nenhum dragão foi ferido fora dos tabuleiros_.

_**Labor improbus omnia vincit** - Publius Vergilius Maro._



[](ASSETS)

[ico-twitter  ]: https://img.shields.io/badge/Twitter-0xD3C0D3-6f42c1?style=flat-square&logo=twitter&logoColor=fff
[ico-instagram]: https://img.shields.io/badge/Instagram-john.bmp-d73a49?style=flat-square&logo=instagram&logoColor=fff
[ico-linkedin ]: https://img.shields.io/badge/linkedin-php--developer-1488C6?style=flat-square&logo=linkedin&logoColor=fff
[ico-github   ]: https://img.shields.io/badge/github-jmurowaniecki-0366d6?style=flat-square&logo=github&logoColor=fff
[ico-dockerhub]: https://img.shields.io/badge/λ::dev-sicredi-099cec?style=flat-square&logo=docker&logoColor=fff
[ico-circleci ]: https://img.shields.io/circleci/build/github/jmurowaniecki/sicredi-librum-ex-dracones?label=CircleCI&logo=circleci&style=flat-square&token=b9fd25eb908755fd60791b8b3bee30e4641ac9e7
[ico-climate  ]: https://api.codeclimate.com/v1/badges/f1c59a28eaeacc36c2b1/maintainability
