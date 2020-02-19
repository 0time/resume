const div = require('../div');
const divider = require('../divider');
const ul = require('../ul');

const formatRoles = resume =>
  resume.roles.map((role, i, roles) =>
    div(`shadow-card role-entry ${roles.length - 1 === i ? 'last-one' : ''}`)(
      div('col contents')([
        div('row role-name-and-dates')([
          div('col role-name')(role.name),
          div('col role-dates')(`${role.start}-${role.end}`),
        ]),
        div('row role-title-and-location')([
          div('col role-title')(role.title),
          div('col role-location')(role.location),
        ]),
        divider('role-divider'),
        div('row role-contents')(ul('role-duties')(role.duties)),
      ])
    )
  );

const roles = resume =>
  div('block roles')(
    [
      div('block')(
        div('contents')([
          div('card-header roles-header')('Experience'),
          divider('header-divider'),
        ])
      ),
    ].concat(formatRoles(resume))
  );

module.exports = roles;
