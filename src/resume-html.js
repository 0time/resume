const {OK} = require('./lib/http/status');

const {link, formatResume} = require('./lib/html');

module.exports = context => key => (req, res, next) =>
  Promise.resolve(context.config[key])
    .then(resume =>
      res.status(OK).send(
        `
<html>
  <head>
    <title>${resume.about.name}</title>
  <body>
    ${formatResume(resume)}
    ${link('index.css')}
    ${link('print.css')}
    ${link('mobile.css')}
  </body>
</html>
    `,
      ),
    )
    .catch(next);
