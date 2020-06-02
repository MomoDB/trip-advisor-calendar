const express = require('express');
const { getPrice, getTripData } = require('./controller.js');
const { postTrips, postTrip, getTrip, getTrips, updateTrip, deleteTrip} = require('./controller.js');
const router = express.Router();

router.get('/:id/price', getTripData); //same as getPrice but does some additional parsing after pulling from db
router.get('/:id/calendar', getPrice);

router.get('/api/calendar', getPrice);

// REST API for trips

// create
router.post('/trips', postTrip);

// read
router.get('/trips/:id', getTrip);

// update
router.put('/trips/:id', updateTrip);

// delete
router.delete('/trips/:id', deleteTrip);

module.exports = router;
