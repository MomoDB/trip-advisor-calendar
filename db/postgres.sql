DROP DATABASE IF EXISTS calendar;
CREATE DATABASE calendar;

\c calendar;

--each trip has mutiple prices.
--records in price table represent day-packages, date+price
--one to many relationship between trips and prices
CREATE TABLE trips (
  id int not null auto_increment,
  available boolean not null,
  detail varchar(1024),
  duration int(4),
  PRIMARY KEY(id)
);

CREATE TABLE prices (
  id int not null auto_increment,
  trip_id int not null,
  trip_date date not null,
  price int(4) not null,
  PRIMARY KEY(id),
  FOREIGN KEY(trip_id) REFERENCES trips(id)
);
