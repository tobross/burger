create database burger_db;
use burger_db;
create table burgers (
id int auto_increment primary key not null,
burger_name varchar(50),
devoured boolean
);
