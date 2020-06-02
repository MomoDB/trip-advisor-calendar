--each trip has mutiple packages.
--one to many relationship between trips and packages
DROP TABLE IF EXISTS trips;

CREATE TABLE trips (
  trip_uuid varchar(128),
  trip_name varchar(128),
  available boolean,
  overview varchar(256),
  mobile_ticket boolean,
  may_cancel boolean,
  instant_confirm boolean,
  languages varchar(128),
  recommend smallint,
  departure_location varchar(128),
  return_location varchar(128),
  includes varchar(128),
  excludes varchar(128),
  duration decimal(4,2),
  info varchar(512),
  PRIMARY KEY(trip_uuid)
);

DROP TABLE IF EXISTS packages;

CREATE TABLE packages (
  package_uuid varchar(128),
  trip_id varchar(128),
  trip_date timestamp,
  package_desc varchar(128),
  duration decimal(4,2),
  recommend smallint,
  cancellation timestamp,
  price_adult smallint,
  price_youth smallint,
  price_child smallint,
  PRIMARY KEY(package_uuid)
);
