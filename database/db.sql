DROP DATABASE IF EXISTS db_indie;

CREATE DATABASE db_indie;

USE db_indie;

CREATE TABLE users (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
) ENGINE = InnoDB;