const morgan = require('morgan');

morgan.token('param', function (req, res, param) {
  return req.params && req.params[param] ? req.params[param] : "-";
});

morgan.token('host', (req) => req.hostname);
morgan.token('body', (req) => JSON.stringify(req.body));


module.exports = morgan('[:method] :url - param[id]=:param[id] - body=:body');
