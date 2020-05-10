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
};

module.exports = API => new ROUTES(API || {});
