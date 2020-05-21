CREATE KEYSPACE IF NOT EXISTS calendar
WITH replication = {'class' : 'SimpleStrategy', 'replication_factor': 3};

USE calendar;

--to query for prices
CREATE TABLE prices_by_date (
  trip_id uuid,
  trip_date date,
  price smallint,
  PRIMARYKEY (trip_id, trip_date)
) WITH CLUSTERING ORDER BY (trip_date ASC);

--to query for trips
CREATE TABLE trips (
  trip_id uuid,
  available boolean,
  detail text,
  duration int,
  PRIMARYKEY (trip_id, available, duration)
) WITH CLUSTERING ORDER BY (available DESC, duration ASC);