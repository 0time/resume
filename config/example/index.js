const fs = require('fs');
const path = require('path');

const about = require('./about');
const roles = path.resolve(__dirname, 'roles');

module.exports = {
  about,
  constants: {
    SKILLS_PER_LINE: 3,
  },
  summary: 'Seeking a summary of what I desire most for my next position',
  skills: ['programming', 'software', 'engineering', 'snorkeling'],
  roles: fs
    .readdirSync(roles)
    .reverse()
    .map(role => require(path.resolve(roles, role))),
};
