const a = require('./a');
const div = require('./div');
const ele = require('./ele');
const {header, roles, skills} = require('./resume');

const SKILLS_PER_LINE = 3;

const formatResume = resume =>
  div('container')(
    div('col resume')([header(resume), skills(resume), roles(resume)]),
  );

const h2 = ele('h2');

const link = href => `<link href="${href}" type="text/css" rel="stylesheet" />`;

const span = ele('span');

module.exports = {
  div,
  ele,
  formatResume,
  h2,
  link,
};
