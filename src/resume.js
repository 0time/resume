const resumeJson = require('./resume-json');
const resumeHtml = require('./resume-html');

const resume = context => key =>
  context.app.get(`/${key}`, (req, res) =>
    res.format({
      'text/html': resumeHtml(context)(key),
      'application/json': resumeJson(context)(key),
    }),
  );

module.exports = resume;
