db/load-csv.sh

cqlsh -f schema.cql

for i in {0..9}
do
  cqlsh -f COPY trips FROM 'db/trip'${i}'.csv' WITH DELIMITER="," AND HEADER=TRUE
  cqlsh -f COPY packages FROM 'db/package'${i}'.csv' WITH DELIMITER="," AND HEADER=TRUE
done
