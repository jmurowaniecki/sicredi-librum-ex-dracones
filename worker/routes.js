class ROUTES {

  API;

  constructor(API) {
    this.API = API;
  }

  CORS(req, res, next) {
    let acw = 'Access-Control-Allow';
    res
      .header(`${acw}-Origin`, '*')
      .header(`${acw}-Headers`, 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  }

  status() {
    return ((req, res) =>
    res.send(JSON.stringify({
      usage: this.API.Status(),
      collections: {}
    }))).bind(this);
  }

  notFound(req, res, next) {
    var err = new Error(`<h1>Oops!</h1><h2>Yeah.. This is a boring 404 - not found page.</h2><p>The requested "<b>${escape(req.url)}</b>" is in another place.</p>`);

    if (req.url === '/') {
      return res
        .status(err.status || 500)
        .send('There`s nothing to see here dude..');
    }

    err.status = 404;
    res.locals.message = err.message;
    res.locals.error = process.env.ENVIRONMENT === 'dev' ? err : false;
    res
      .status(err.status || 500)
      .header('Warning', "You'll be redirected soon..")
      .redirect('/');
    res
      .send(err.message);

  }
};

module.exports = API => new ROUTES(API || {});
