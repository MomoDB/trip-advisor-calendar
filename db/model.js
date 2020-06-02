const DB = require('./index.js');
const pg = require('./pgindex.js');
// DB is promisified in db index.js file, use async await to get query data

module.exports = {
  fetchSample: async (callback) => {
    try {
      const id = '7eff984d-765b-48eb-8fe0-5d27740193c1'
      const psql = `select * from trips limit 1;`;
      const results = await pg.one(psql);
      callback(null, results);
    } catch (err) {
      callback(err);
    }
  },

  fetchTripData: async (date, tripId, adults, callback) => {
    try {
      const sql = `select tripname, detail, duration, cancelation, totalbooked, price, trip_availability from trips, prices where trip_date = "${date}" and trips.id = "${tripId}"`;
      const results = await DB.queryAsync(sql);
      results[0].trip_availability = results[0].trip_availability - adults;
      callback(null, results);
    } catch (err) {
      callback(err);
    }
  },

  fetchCurrentTrip: async (date, tripId, callback) => {
    try {
      const sql = `select tripname, detail, duration, cancelation, totalbooked, price, trip_availability from trips, prices where trip_date = "${date}" and trips.id = "${tripId}"`;
      const results = await DB.queryAsync(sql);
      results[0].trip_availability = results[0].trip_availability - 2;
      callback(null, results);
    } catch (err) {
      callback(err);
    }
  },

  postTrip: async (date, trip, callback) => {
    try {
      const { tripname, detail, duration, cancelation, totalbooked, price, trip_availability } = trip;
      const sql = `insert into trips (tripname, detail, duration, cancelation, totalbooked, price, trip_availability) values (?, ?, ?, ?, ?, ?, ?)`;
      const results = await DB.queryAsync(sql, [tripname, detail, duration, cancelation, totalbooked, price, trip_availability]);
      callback(null, 'success');
    } catch (err) {
      callback(err);
    }
  },

  fetchTrips: async (date, callback) => {
    try {
      const sql = `select tripname, detail, duration, cancelation, totalbooked, price, trip_availability from trips, prices where trip_date = "${date}"`;
      const results = await DB.queryAsync(sql);
      callback(null, results);
    } catch (err) {
      callback(err);
    }
  },

  updateTrip: async (date, trip, tripId, callback) => {
    try {
      const { tripname, detail, duration, cancelation, totalbooked, price, trip_availability } = trip;
      const sql = `update trips set tripname = ?, detail = ?, duration = ?, cancelation = ?, totalbooked = ?, price = ?, trip_availability = ? where id = ?`;
      const results = await DB.queryAsync(sql, [tripname, detail, duration, cancelation, totalbooked, price, trip_availability, tripId]);
      callback(null, 'success');
    } catch (err) {
      callback(err);
    }
  },

  deleteTrip: async (date, tripId, callback) => {
    try {
      const sql = `delete from trips where id = ?`;
      const results = await DB.queryAsync(sql, [tripId]);
      callback(null, 'success');
    } catch (err) {
      callback(err);
    }
  },
};
