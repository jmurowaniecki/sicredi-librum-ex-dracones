/**
 * API server.
 *
 * Simple API structure.
 *
 * @author John Murowaniecki <jmurowaniecki@gmail.com>
 *
 */
const λ = require('./CORE')({
  server: {
    port: process.env.PORT || 4200,
  },
})

  .Service((WebInterface, API) => {
    const ROUTES = require('./routes')(API);

    if (process.env.ENVIRONMENT === 'dev') {
      // ..
    }

    WebInterface // Setup common routes..
      .use(ROUTES.CORS) //  Allowing CORS.
      .get('/status', ROUTES.status())
      .use('/images', API.Server.static('./saved/images/'))
      .use(API.Server.static('./public'));
    });
