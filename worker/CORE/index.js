/**
 * λ::Lambda proto-framework
 *
 * Just a prototype.
 *
 * @class  λ
 *
 * @author John Murowaniecki <jmurowaniecki@gmail.com>
 * @link   https://github.com/jmurowaniecki/lambda-js
 *
 */
class λ {

  Server = Express;
  Cluster = Cluster;

  constructor(config) {

    this.startupWebService(this.extractConfig('server', config));
  }

  startupWebService(config) {
    const portNum = config.port || 3000;
    this.iAm = ['Worker', 'Monitor'][this.Cluster.isMaster + 0];
    this.WebInterface = this.Server();
    this.WebInterface.listen(portNum, () => {
      process.title = `λ.${this.iAm}:${portNum}`;
    });
  }

  extractConfig(from, data) {
    return data[from] ? data[from] : {};
  }

  Service(routes) {
    if (!!routes && typeof routes === 'function') {
      routes(this.WebInterface, this);
    }
    return this;
  }

  Status() {
    return {
      CPU: ƒ(OS.cpus()).do((p, e) => [p.map(cpuInfo => (e = cpuInfo.model, cpuInfo.speed)), e]),
      RAM: ƒ(OS.freemem()).do((e) => [parseInt(e / Math.pow(1024, 2), 10), 'MB']),
    };
  }
}



/**
 * Class requirements.
 */
const Express = require('express');
const Cluster = require('cluster');
const OS      = require('os');

const ƒ = ħ => {
  return {
    do: Ł => Ł(ħ)
  }
};



module.exports = (config) => new λ(config);
