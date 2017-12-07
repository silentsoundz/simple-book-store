DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;

\c bookstore

DROP TABLE IF EXISTS books;
CREATE TABLE IF NOT EXISTS books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(1000),
  author VARCHAR(1000),
  genre VARCHAR(1000),
  height INT,
  publisher VARCHAR(1000));