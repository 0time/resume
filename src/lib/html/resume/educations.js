const div = require('../div');
const divider = require('../divider');
const {get} = require('lodash');
const ul = require('../ul');

const formatEducations = resume =>
  get(resume, 'educations', []).map((education, i, educations) =>
    div(
      `shadow-card education-entry ${
        educations.length - 1 === i ? 'last-one' : ''
      }`,
    )(
      div('col contents')([
        div('row education-name-and-dates')([
          div('col education-name')(education.name),
          div('col education-dates')(`${education.start}-${education.end}`),
        ]),
        div('row education-title-and-location')([
          div('col education-title')(education.degree),
          div('col education-location')(education.location),
        ]),
        divider('education-divider'),
        div('row education-contents')(ul('education-duties')(education.duties)),
      ]),
    ),
  );

const educations = resume =>
  div('block educations')(
    [
      div('block')(
        div('contents')([
          div('card-header educations-header')('Education'),
          divider('header-divider'),
        ]),
      ),
    ].concat(formatEducations(resume)),
  );

module.exports = educations;
