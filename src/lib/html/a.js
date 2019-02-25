const ele = require('./ele');

const a = _class => href => `<a class="${_class}" href="${href}">${href}</a>`;

module.exports = a;
