# db/load-csv.sh

# cqlsh -f db/schema.cql

for i in {0..9}
do
  echo "COPY calendar.trips FROM 'db/trip"${i}".csv' WITH DELIMITER=',' AND HEADER=TRUE;" > db/cassandraQueries.cql

  cqlsh -f db/cassandraQueries.cql

  echo "COPY calendar.packages FROM 'db/package"${i}".csv' WITH DELIMITER=',' AND HEADER=TRUE;" > db/cassandraQueries.cql

  cqlsh -f db/cassandraQueries.cql
done
