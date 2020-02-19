const {get} = require('lodash');

const div = require('../div');
const divider = require('../divider');
const constants = require('../../constants');

const skillSetsAreFull = resume => acc => {
  const skillsPerLine = get(
    resume,
    'constants.SKILLS_PER_LINE',
    constants.DEFAULT_SKILLS_PER_LINE,
  );

  const count = acc[acc.length - 1].length;
  const countPerCol = Math.ceil((resume.skills.length * 1.0) / skillsPerLine);

  return count % countPerCol === 0 && count > 0;
};

const formatSkills = resume =>
  resume.skills
    .reduce(
      (acc, skill) => {
        if (skillSetsAreFull(resume)(acc)) {
          acc.push([]);
        }

        acc[acc.length - 1].push(skill);

        return acc;
      },
      [[]],
    )
    .map(setOfSkills =>
      div('col skills-col')(setOfSkills.map(skill => div('skill-row')(skill))),
    );

const skills = resume =>
  div('block skills')([
    div('block')(
      div('contents')([
        div('card-header skills-header')('Skills'),
        divider('header-divider'),
      ]),
    ),
    div('shadow-card skills-container')(
      div('contents')([div('row skills-table')(formatSkills(resume))]),
    ),
  ]);

module.exports = skills;
