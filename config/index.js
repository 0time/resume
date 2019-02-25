const fs = require('fs');
const path = require('path');

module.exports = Object.assign(
  {},
  fs
    .readdirSync(__dirname)
    .map(file => ({
      file,
      fullFile: path.resolve(__dirname, file),
      stat: null,
    }))
    .map(({file, fullFile}) => ({
      file,
      fullFile,
      stat: fs.statSync(fullFile),
    }))
    .filter(({stat}) => stat.isDirectory())
    .reduce(
      (acc, {file, fullFile}) =>
        Object.assign(
          {
            [file]: require(fullFile),
          },
          acc,
        ),
      {},
    ),
  {
    server: {
      host: '0.0.0.0',
    },
  },
);

console.error(Object.keys(module.exports));
