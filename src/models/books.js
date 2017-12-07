const db = require('./db')

const getAll = () =>
  db.any(`SELECT * FROM books`).catch((error) => {
    console.log("get all books error", error.stack)
  })


const getByTitle = title =>
  db.any(`SELECT * FROM books WHERE title = $1`, [title]).catch((error) => {
    console.log("get by title error", error.stack)
  })

const getByAuthor = author =>
  db.any(`SELECT * FROM books WHERE author = $1`, [author]).catch((error) => {
    console.log("get by author error", error.stack)
  })


const getByGenre = genre =>
  db.any(`SELECT *
    FROM books
    WHERE genre = $1`, [genre])
    .catch((error) => {
      console.log("get by genre error", error.stack)
    })

const createBook = (title, author, genre, height, publisher) =>
  db.query(
    `INSET INTO
    books(title, author, genre, height, publisher) VALUES ($1, $2, $3, $4, $5)
    RETURNING *`,
    [title, author, genre, height, publisher]
  ).catch((error) => {
    console.log("create book error", error.stack)
  })

const editBook = (id, title, author, genre, height, publisher) =>
  db.one(
    `UPDATE
    books
    SET
    title = $2, author = $3, genre = $4, height = $5, publishers = $6,
    WHERE
    id = $1
    RETURNING *;`,
    [id, title, author, genre, height, publisher]
  ).catch((error) => {
    console.log("edit book error", error.stack)
  })

const destroyMember = id =>
db.one(
  `DELETE FROM
  books
  WHERE
  id = $1
  RETURNING *;`,
  [id]
)

module.exports = {
  getAll,
  getByTitle,
  getByAuthor,
  getByGenre,
  createBook,
  editBook
}
