db/load-csv.sh

cqlsh -f db/schema.cql

for i in {0..9}
do
  echo "COPY calendar.trips (trip_id, name, available, overview, mobile_ticket, may_cancel, instant_confirm, languages, recommend, departure_location, return_location, includes, excludes, duration, info) FROM 'db/trip"${i}".csv' WITH DELIMITER=',' AND HEADER=TRUE;" > db/cassandraQueries.cql

  cqlsh -f db/cassandraQueries.cql

  echo "COPY calendar.packages (package_id, trip_id, trip_date, package_desc, duration, recommend, cancellation, price_adult, price_youth, price_child) FROM 'db/package"${i}".csv' WITH DELIMITER=',' AND HEADER=TRUE;" > db/cassandraQueries.cql

  cqlsh -f db/cassandraQueries.cql
done
