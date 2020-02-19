const a = require('../a');
const div = require('../div');
const tel = require('../tel');
const mailto = require('../mailto');

const getHeader = resume =>
  div('block')(
    div('contents')(
      div('row header-row')([
        div('col header-identity')([
          div('header-name')(resume.about.name),
          div('header-subtitle')(resume.about.subtitle),
        ]),
        div('col header-contact')([
          div('header-phone')(tel(resume.about.phone)),
          div('header-email')(mailto(resume.about.email)),
          div('header-github')(a('github')(resume.about.github)),
        ]),
      ]),
    ),
  );

module.exports = getHeader;
