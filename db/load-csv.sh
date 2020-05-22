for i in {0..9}
do
  [ -f db/trip${i}.csv ] && rm db/trip${i}.csv
  touch db/trip${i}.csv
  [ -f db/package${i}.csv ] && rm db/package${i}.csv
  touch db/package${i}.csv
done

node ./db/generate.js
