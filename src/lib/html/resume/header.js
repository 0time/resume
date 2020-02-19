const a = require('../a');
const div = require('../div');
const {get, has} = require('lodash');
const tel = require('../tel');
const mailto = require('../mailto');

const {CLASSES, SELECTORS} = require('../../constants');

const getIdentity = resume => {
  const fields = [];

  fields.push(div('header-name')(resume.about.name));
  fields.push(div('header-subtitle')(resume.about.subtitle));

  if (has(resume, SELECTORS.HEADER_LOCATION)) {
    fields.push(
      div(CLASSES.HEADER_LOCATION)(get(resume, SELECTORS.HEADER_LOCATION)),
    );
  }

  return div('col header-identity')(fields);
};

const getHeader = resume =>
  div('block')(
    div('contents')(
      div('row header-row')([
        getIdentity(resume),
        div('col header-contact')([
          div('header-phone')(tel(resume.about.phone)),
          div('header-email')(mailto(resume.about.email)),
          div('header-github')(a('github')(resume.about.github)),
        ]),
      ]),
    ),
  );

module.exports = getHeader;
