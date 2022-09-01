create database coins;

use coins;

create table coins_info (
	id int primary key auto_increment,
    name varchar(30) not null,
    type varchar(15) not null,
    small_desc varchar(150) not null,
    full_desc text not null,
    country varchar(20) not null,
	composition varchar(15) not null,
	quality varchar(10) not null,
	denomination varchar(20) not null,
	year year not null,
	weight varchar(10) not null,
	price varchar(5) not null,
    obverse varchar(30) not null,
    reverse varchar(30) not null
);

select * from coins_info;