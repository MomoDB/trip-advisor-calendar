const fs = require('fs');
const fastcsv = require('fast-csv');
const { v1: uuidv1 } = require('uuid');
const { v4: uuidv4 } = require('uuid');

const d1 = new Date(2020, 2, 5);
const d2 = new Date(2020, 3, 17);
const d3 = new Date(2020, 0, 1)

const randomDate = [
  `${d1.getUTCFullYear()}-${(d1.getUTCMonth() + 1).toString().padStart(2, 0)}-${(d1.getUTCDay() + 1).toString().padStart(2, 0)} ${d1.getUTCHours().toString().padStart(2, 0)}:${d1.getUTCMinutes().toString().padStart(2, 0)}:${d1.getUTCSeconds().toString().padStart(2, 0)}+0000`,
  `${d2.getUTCFullYear()}-${(d2.getUTCMonth() + 1).toString().padStart(2, 0)}-${(d2.getUTCDay() + 1).toString().padStart(2, 0)} ${d2.getUTCHours().toString().padStart(2, 0)}:${d2.getUTCMinutes().toString().padStart(2, 0)}:${d2.getUTCSeconds().toString().padStart(2, 0)}+0000`,
  `${d3.getUTCFullYear()}-${(d3.getUTCMonth() + 1).toString().padStart(2, 0)}-${(d3.getUTCDay() + 1).toString().padStart(2, 0)} ${d3.getUTCHours().toString().padStart(2, 0)}:${d3.getUTCMinutes().toString().padStart(2, 0)}:${d3.getUTCSeconds().toString().padStart(2, 0)}+0000`,
];

const randomPrice = [150, 200, 75];

const randomName = ["trip1", "trip2", "trip3"];

const randomOverview = ["good trip", "bad trip", "okay trip"];

const randomLang = ["English", "Spanish", "Swahili"]

const randomLocation = ["123 Main st", "2nd Ave, City, State", "some sketchy road"];

const randomInclude = ["food", "drinks", "cars"];

const randomExclude = ["bikes", "shoes", "kindness"];

const randomDuration = [1, 2, 1.5];

const randomInfo = ["bring food", "no electronics", "eat first"];

const randomDesc = ["a trip", "some trip I guess", "probably a scam"]

const randomRec = [100, 50, 85];

const randomBool = [true, false, true];

const makePackage = (id, index) => {
  return {
    'package_id': uuidv1(),
    'trip_id': id,
    'trip_date': randomDate[index],
    'package_desc': randomDesc[index],
    duration: randomDuration[index],
    recommend: randomRec[index],
    cancellation: randomDate[index],
    'price_adult': randomPrice[index],
    'price_youth': randomPrice[(index + 1) % 3],
    'price_child': randomPrice[(index + 2) % 3],
 };
};

const makeTrip = (id, index) => {
  return {
    'trip_id': id,
    name: randomName[index],
    available: randomBool[index],
    overview: randomOverview[index],
    'mobile_ticket': randomBool[index],
    'may_cancel': randomBool[index],
    'instant_confirm': randomBool[index],
    languages: randomLang[index],
    recommend: randomRec[index],
    'departure_;ocation': randomLocation[index],
    'return_location': randomLocation[index],
    includes: randomInclude[index],
    excludes: randomExclude[index],
    duration: randomDuration[index],
    info: randomInfo[index],
  };
};

const generate = (count, chunk) => {
  for (let j = 0; j < chunk; j++) {
    const trips = [];
    const packages = [];

    for (let i = 0; i < parseInt(count / chunk); i++) {
      const currentTrip = j * parseInt(count / chunk) + i + 1;
      const newUUID = uuidv4();
      trips.push(makeTrip(newUUID, i % 3));
      packages.push(makePackage(newUUID, i % 3));
      packages.push(makePackage(newUUID, (i + 1) % 3));
      packages.push(makePackage(newUUID, (i +1) % 3));
    }

    const tripWS = fs.createWriteStream(`db/trip${j}.csv`);
    fastcsv
      .write(trips, { headers: true })
      .pipe(tripWS);

    const packageWS = fs.createWriteStream(`db/package${j}.csv`);
    fastcsv
      .write(packages, { headers: true })
      .pipe(packageWS);
  }

  console.log('finished generating csv');
};

generate(100, 10);


