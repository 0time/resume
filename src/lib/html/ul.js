const ele = require('./ele');
const li = require('./li');

const ul = _class => list => ele('ul')(_class)(list.map(li('')));

module.exports = ul;
