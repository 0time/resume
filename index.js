const Promise = require('bluebird');
const config = require('./config');
const express = require('express');
const path = require('path');
const {get} = require('lodash');

const resume = require('./src/resume');

const ignored = ['server'];
const notIgnored = needle => !ignored.includes(needle);

const listResumes = context => Object.keys(context.config).filter(notIgnored);

const main = () =>
  Promise.resolve(express())
    .then(app => ({
      app,
      config,
    }))
    .tap(({app}) => console.error(app))
    .tap(context => console.error(listResumes(context)))
    .tap(context => listResumes(context).map(resume(context)))
    .tap(context =>
      context.app.use(express.static(path.resolve(__dirname, 'static'))),
    )
    .tap(({app}) =>
      app.listen(
        get(config, 'server.port', 3000),
        get(config, 'server.host', '127.0.0.1'),
      ),
    )
    .catch(err => console.error(err) || process.exit(1));

if (require.main === module) {
  main(process.argv.slice(2));
}
