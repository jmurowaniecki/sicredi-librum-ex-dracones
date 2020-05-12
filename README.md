![](.../assets/decoration.png)

**Librum ex Dracones** trata-se de um [teste de conhecimentos](https://github.com/WoopSicredi/jobs/issues/6).



## Primeiros passos

Você pode realizar o deploy instantâneo no Heroku sem precisar instalar nada no seu ambiente de trabalho bastando utilizar o botão abaixo:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)



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



## Docker e Containers
[url-dockerhub]: https://hub.docker.com/repository/docker/lambdadeveloper/sicredi
[url-circleci ]: https://app.circleci.com/pipelines/github/jmurowaniecki/sicredi-librum-ex-dracones

[![DockerHub][ico-dockerhub]][url-dockerhub]
[![CircleCI][ico-circleci]][url-circleci]

Os containers são atualizados sempre que houver alteração nos ramos principais do repositório e estarão disponíveis publicamente no [Docker Hub][url-dockerhub] de forma automatizada via [CircleCI][url-circleci].



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



## Hic svnt dracones
###### Agradecimentos

Este exemplo utiliza as bibliotecas [pizzicato de alemangui](https://github.com/alemangui/pizzicato) para as músicas de fundo e demais efeitos sonoros. Músicas e efeitos sonoros obtidos através de [FreeSound.org](https://freesound.org/) licenciados em sua maioria como Creative Commons ou uso particular.

As imagens foram extraídas de [PNG find](https://www.pngfind.com/) em sua maioria como licença Creative Commons ou uso particular, e foram em parte reconstituídas e modificadas artisticamente para se adequar ao design preservando a arte original.

Inspiração no trabalho artístico de Diablo - UI e OST -, Rhapsody of Fire e **D&D / d⚂20**.

Nenhum plugin foi utilizado para os efeitos de paralax nos dragões - _nenhum dragão foi ferido fora dos tabuleiros_.

_**Labor improbus omnia vincit** - Publius Vergilius Maro._



[](ASSETS)

[ico-twitter  ]: https://img.shields.io/badge/Twitter-0xD3C0D3-6f42c1?style=flat-square&logo=twitter&logoColor=fff
[ico-instagram]: https://img.shields.io/badge/Instagram-john.bmp-d73a49?style=flat-square&logo=instagram&logoColor=fff
[ico-linkedin ]: https://img.shields.io/badge/linkedin-php--developer-1488C6?style=flat-square&logo=linkedin&logoColor=fff
[ico-github   ]: https://img.shields.io/badge/github-jmurowaniecki-0366d6?style=flat-square&logo=github&logoColor=fff
[ico-dockerhub]: https://img.shields.io/badge/λ::dev-sicredi-099cec?style=flat-square&logo=docker&logoColor=fff
[ico-circleci]: https://img.shields.io/circleci/build/github/jmurowaniecki/sicredi-librum-ex-dracones?label=CircleCI&logo=circleci&style=flat-square&token=b9fd25eb908755fd60791b8b3bee30e4641ac9e7
