ALTER TABLE trips
ALTER COLUMN trip_uuid SET not null,
ALTER COLUMN available SET not null,
ALTER COLUMN departure_location SET not null;

ALTER TABLE packages
ALTER COLUMN package_uuid SET not null,
ALTER COLUMN trip_id SET not null,
ALTER COLUMN trip_date SET not null,
ALTER COLUMN duration SET not null,
ALTER COLUMN price_adult SET not null,
ALTER COLUMN price_youth SET not null,
ALTER COLUMN price_child SET not null;

ALTER TABLE packages
ADD FOREIGN KEY (trip_id) REFERENCES trips(trip_uuid);