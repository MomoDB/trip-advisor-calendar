const fs = require('fs');
const fastcsv = require('fast-csv');

const randomDate = [new Date(2020, 2, 5), new Date(2020, 3, 17), new Date(2020, 0, 1)];

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
    price: randomPrice[index],
    tripId: id,
    tripDate: randomDate[index],
    packageDesc: randomDesc[index],
    duration: randomDuration[index],
    recommend: randomRec[index],
    cancellation: randomDate[index],
    priceAdult: randomPrice[index],
    priceYouth: randomPrice[(index + 1) % 3],
    priceChild: randomPrice[(index + 2) % 3],
 };
};

const makeTrip = (index) => {
  return {
    tripName: randomName[index],
    available: randomBool[index],
    overview: randomOverview[index],
    mobileTicket: randomBool[index],
    mayCancel: randomBool[index],
    instantConfirm: randomBool[index],
    languages: randomLang[index],
    recommend: randomRec[index],
    departureLocation: randomLocation[index],
    returnLocation: randomLocation[index],
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

      trips.push(makeTrip(i % 3));
      packages.push(makePackage(currentTrip, i % 3));
      packages.push(makePackage(currentTrip, (i + 1) % 3));
      packages.push(makePackage(currentTrip, (i +1) % 3));
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


