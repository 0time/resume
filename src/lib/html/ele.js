const {isArray, isString} = require('lodash');

const ele = tag => _class => val => {
  const wrap = val => `<${tag} class="${_class}">${val}</${tag}>`;

  if (isString(val)) {
    return wrap(val);
  } else if (isArray(val)) {
    return wrap(val.join('\n'));
  } else {
    // TODO
    return null;
  }
};

module.exports = ele;
