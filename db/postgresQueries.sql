\copy packages (package_uuid, trip_id, trip_date, package_desc, duration, recommend, cancellation, price_adult, price_youth, price_child) FROM 'db/pgpackage9.csv' DELIMITER ',' CSV HEADER;
