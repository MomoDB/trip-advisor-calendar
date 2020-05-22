db/load-csv.sh

psql calendar > postgres.sql

for i in {0..9}
do
  psql calendar > COPY trips FROM 'db/trip'${i}'.csv' DELIMITER=',' CSV HEADER
  psql calendar > COPY packages FROM 'db/package'${i}'.csv' DELIMITER=',' CSV HEADER
done

psql calendar > pgconstraints.sql