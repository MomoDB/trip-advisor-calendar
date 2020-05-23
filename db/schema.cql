CREATE KEYSPACE IF NOT EXISTS calendar
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE calendar;

--to query for packages
CREATE TABLE calendar.packages (
  package_id uuid,
  trip_id uuid,
  trip_date date,
  package_desc text,
  duration decimal,
  recommend tinyint,
  cancellation date,
  price_adult smallint,
  price_youth smallint,
  price_child smallint,
  PRIMARY KEY (package_id, trip_id, trip_date)
) WITH CLUSTERING ORDER BY (trip_id ASC, trip_date ASC);

--to query for trips
CREATE TABLE calendar.trips (
  trip_id uuid,
  name text,
  available boolean,
  overview text,
  mobile_ticket boolean,
  may_cancel boolean,
  instant_confirm boolean,
  languages text,
  recommend tinyint,
  departure_location text,
  return_location text,
  includes text,
  excludes text,
  duration decimal,
  info text,
  PRIMARY KEY (trip_id, available, duration, recommend)
) WITH CLUSTERING ORDER BY (available DESC, duration ASC, recommend ASC);