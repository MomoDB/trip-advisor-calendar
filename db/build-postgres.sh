# psql -d calendar -a -f db/pgload.sql

for i in {0..9}
do
  echo "\\\copy trips (trip_uuid, trip_name, available, overview, mobile_ticket, may_cancel, instant_confirm, languages, recommend, departure_location, return_location, includes, excludes, duration, info) FROM 'db/pgtrip"${i}".csv' DELIMITER ',' CSV HEADER;" > db/postgresQueries.sql

  psql -d calendar -a -f db/postgresQueries.sql

  echo "\\\copy packages (package_uuid, trip_id, trip_date, package_desc, duration, recommend, cancellation, price_adult, price_youth, price_child) FROM 'db/pgpackage"${i}".csv' DELIMITER ',' CSV HEADER;" > db/postgresQueries.sql

  psql -d calendar -a -f db/postgresQueries.sql
done

# psql -d calendar -a -f db/pgconstraint.sql