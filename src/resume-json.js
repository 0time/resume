const {OK} = require('./lib/http/status');

module.exports = context => key => (req, res) =>
  res.status(OK).send(context.config[key]);
