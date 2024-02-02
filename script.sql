CREATE TABLE `Users` (
  `id` integer PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `date_of_birth` date,
  `address` varchar(255),
  `email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `Reservations` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `offer_id` integer,
  `start_datetime` datetime,
  `end_datetime` datetime,
  `status` varchar(255)
);

CREATE TABLE `Offers` (
  `id` integer PRIMARY KEY,
  `departure_city` varchar(255),
  `return_city` varchar(255),
  `start_datetime` datetime,
  `end_datetime` datetime,
  `vehicle_id` integer,
  `rate` decimal
);

CREATE TABLE `Vehicles` (
  `id` integer PRIMARY KEY,
  `brand` varchar(255),
  `model` varchar(255),
  `manufacturing_year` integer,
  `chassis_number` varchar(255),
  `color` varchar(255),
  `availability` boolean,
  `fuel_id` integer
);

CREATE TABLE `Fuel` (
  `id` integer PRIMARY KEY,
  `fuel_type` varchar(255)
);

CREATE TABLE `CommunicationTypes` (
  `id` integer PRIMARY KEY,
  `type` varchar(255)
);

CREATE TABLE `Communications` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `communication_type_id` integer,
  `interaction_datetime` datetime,
  `content` text
);

ALTER TABLE `Reservations` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Reservations` ADD FOREIGN KEY (`offer_id`) REFERENCES `Offers` (`id`);

ALTER TABLE `Offers` ADD FOREIGN KEY (`vehicle_id`) REFERENCES `Vehicles` (`id`);

ALTER TABLE `Vehicles` ADD FOREIGN KEY (`fuel_id`) REFERENCES `Fuel` (`id`);

ALTER TABLE `Communications` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Communications` ADD FOREIGN KEY (`communication_type_id`) REFERENCES `CommunicationTypes` (`id`);
