db/load-csv.sh

cqlsh > schema.cql

for i in {0..9}
do
  cqlsh > COPY trips FROM 'db/trip'${i}'.csv' WITH DELIMITER="," AND HEADER=TRUE
  cqlsh > COPY packages FROM 'db/package'${i}'.csv' WITH DELIMITER="," AND HEADER=TRUE
done
