db/load-csv.sh

psql -d calendar -a -f db/postgres.sql

for i in {0..9}
do
  echo "COPY trips FROM 'db/trip"${i}".csv' DELIMITER=',' CSV HEADER;" > db/postgresQueries.sql

  psql -d calendar -a -f db/postgresQueries.sql

  echo "COPY packages FROM 'db/package"${i}".csv' DELIMITER=',' CSV HEADER;" > db/postgresQueries.sql

  psql -d calendar -a -f db/postgresQueries.sql
done

psql -d calendar -a -f db/pgconstraints.sql