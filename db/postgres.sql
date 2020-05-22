DROP DATABASE IF EXISTS calendar;
CREATE DATABASE calendar;

--each trip has mutiple packages.
--one to many relationship between trips and packages
CREATE TABLE trips (
  id int not null auto_increment,
  trip_name varchar(128);
  available boolean not null,
  overview varchar(256),
  mobile_ticket boolean,
  may_cancel boolean,
  instant_confirm boolean,
  languages varchar(128),
  recommend int(3),
  departure_location varchar(128) not null,
  return_location varchar(128),
  includes varchar(128),
  excludes varchar(128),
  duration decimal(4,2),
  info varchar(512),
  PRIMARY KEY(id)
);

CREATE TABLE packages (
  id int not null auto_increment,
  trip_id int not null,
  trip_date date not null,
  package_desc varchar(128),
  duration decimal(4,2) not null,
  recommend int(3),
  cancellation date,
  price_adult int(4) not null,
  price_youth int(4) not null,
  price_child int(4) not null,
  PRIMARY KEY(id),
  FOREIGN KEY(trip_id) REFERENCES trips(id)
);
