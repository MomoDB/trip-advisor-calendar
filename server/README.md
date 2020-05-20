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
      "name": "String",
      "detail": "String",
      "duration": "Number",
      "cancelation": "Boolean",
      "totalBooked": "Number",
      "price": "Number"
    }
```

### Add restaurant
  * POST `/api/trips`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
      "detail": "String",
      "duration": "Number",
      "cancelation": "Boolean",
      "totalBooked": "Number",
    }
```


### Update restaurant info
  * PATCH `/api/trips/:id`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "name": "String",
      "detail": "String",
      "duration": "Number",
      "cancelation": "Boolean",
      "totalBooked": "Number",
    }
```

### Delete restaurant
  * DELETE `/api/trips/:id`

**Path Parameters:**
  * `id` trip id

**Success Status Code:** `204`