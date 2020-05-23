db/load-csv.sh

cqlsh -f schema.cql

for i in {0..9}
do
  echo "COPY trips FROM 'db/trip"${i}".csv' WITH DELIMITER=',' AND HEADER=TRUE;" > cassandraQueries.cql
  echo "COPY packages FROM 'db/package"${i}".csv' WITH DELIMITER=',' AND HEADER=TRUE;" > cassandraQueries.cql
done

cqlsh -f cassandraQueries.cql