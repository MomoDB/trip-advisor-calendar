// const Promise = require('bluebird');

const pgp = require('pg-promise')({});
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'calendar',
  user: 'danielmondo',
  password: '', // TODO gitignore
};

const pg = pgp(cn);

module.exports = pg;

// db.one(`select * from trips limit 1;`).then(()=>console.log('got it'));
