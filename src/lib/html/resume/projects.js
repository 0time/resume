const a = require('../a');
const div = require('../div');
const divider = require('../divider');
const ul = require('../ul');

const formatRoles = resume =>
  resume.projects.map((project, i, projects) =>
    div(
      `shadow-card project-entry ${projects.length - 1 === i ? 'last-one' : ''}`
    )(
      div('col contents')([
        div('row project-name-and-dates')([
          div('col project-name')(project.name),
          div('col project-dates')(a('project-link')(project.link)),
        ]),
        div('row project-contents')(ul('project-duties')(project.duties)),
        divider('project-divider'),
      ])
    )
  );

const projects = resume =>
  div('block projects last-one')(
    [
      div('block')(
        div('contents')([
          div('card-header projects-header')('Personal Experience'),
          divider('header-divider'),
        ])
      ),
    ].concat(formatRoles(resume))
  );

module.exports = projects;
