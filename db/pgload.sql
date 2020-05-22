DROP DATABASE IF EXISTS calendar;
CREATE DATABASE calendar;

\c calendar;

--each trip has mutiple packages.
--one to many relationship between trips and packages
CREATE TABLE trips (
  id int auto_increment,
  trip_name varchar(128);
  available boolean,
  overview varchar(256),
  mobile_ticket boolean,
  may_cancel boolean,
  instant_confirm boolean,
  languages varchar(128),
  recommend int(3),
  departure_location varchar(128),
  return_location varchar(128),
  includes varchar(128),
  excludes varchar(128),
  duration decimal(4,2),
  info varchar(512),
  PRIMARY KEY(id)
);

CREATE TABLE packages (
  id int auto_increment,
  trip_id int,
  trip_date date,
  package_desc varchar(128),
  duration decimal(4,2),
  recommend int(3),
  cancellation date,
  price_adult int(4),
  price_youth int(4),
  price_child int(4),
  PRIMARY KEY(id),
);
