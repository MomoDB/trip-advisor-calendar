# CRUD API

## create
```
router.post('/trips', postTrip);
```
use case: HTTP POST http://{url}/trips

## read
```
router.get('/trips', getTrips);
router.get('/trips/:id', getTrip);
```
use case 1: HTTP GET http://{url}/trips
use case 2: HTTP GET http://{url}/trips/{id}

## update
```
router.put('/trips/:id', updateTrip);
```
use case: HTTP PUT http://{url}/trips/{id}

## delete
```
router.delete('/trips/:id', deleteTrip);
```
use case: HTTP DELETE http://{url}/trips/{id}