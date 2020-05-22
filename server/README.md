## Server API

### Get trip info
  * GET `/api/trips/:id`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "tripName": "String",
      "available": "Boolean",
      "overview": "String",
      "mobileTicket": "Boolean",
      "mayCancel": "Boolean",
      "instantConfirm": "Boolean",
      "languages": "String",
      "recommend": "Number",
      "departureLocation": "String",
      "returnLocation": "String",
      "includes": "String",
      "excludes": "String",
      "duration": "Number",
    }
```

### Add trip
  * POST `/api/trips`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "tripName": "String",
      "available": "Boolean",
      "overview": "String",
      "mobileTicket": "Boolean",
      "mayCancel": "Boolean",
      "instantConfirm": "Boolean",
      "languages": "String",
      "recommend": "Number",
      "departureLocation": "String",
      "returnLocation": "String",
      "includes": "String",
      "excludes": "String",
      "duration": "Number",
    }
```


### Update trip info
  * PATCH `/api/trips/:id`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "tripName": "String",
      "available": "Boolean",
      "overview": "String",
      "mobileTicket": "Boolean",
      "mayCancel": "Boolean",
      "instantConfirm": "Boolean",
      "languages": "String",
      "recommend": "Number",
      "departureLocation": "String",
      "returnLocation": "String",
      "includes": "String",
      "excludes": "String",
      "duration": "Number",
    }
```

### Delete trip
  * DELETE `/api/trips/:id`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `204`

### Get packages info
  * GET `/api/packagesByTripId/:id`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `200`

**Returns:** JSON

```json
    [{
      "packageId": "String",
      "tripId": "String",
      "tripDate": "String",
      "description": "String",
      "duration": "Number",
      "recommend": "Number",
      "cancellation": "String",
      "priceAdult": "Number",
      "priceYouth": "Number",
      "priceChild": "Number",
    }]
```

### Add package
  * POST `/api/packages`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "tripId": "String",
      "tripDate": "String",
      "description": "String",
      "duration": "Number",
      "recommend": "Number",
      "cancellation": "String",
      "priceAdult": "Number",
      "priceYouth": "Number",
      "priceChild": "Number",
    }
```


### Update package info
  * PATCH `/api/packagesByPackageId/:id`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "tripId": "String",
      "tripDate": "String",
      "description": "String",
      "duration": "Number",
      "recommend": "Number",
      "cancellation": "String",
      "priceAdult": "Number",
      "priceYouth": "Number",
      "priceChild": "Number",
    }
```

### Delete package
  * DELETE `/api/packagesByPackageId/:id`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `204`