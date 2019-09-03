// 1. see a list of pre-populated movies
// 2. add a movie to the list
// 3. update movie info
// 4. remove a movie
// 5. see only released movies

const express = require("express");
const server = express();

let actors = [
  { id: 1, name: "Elijah Woods", movies: [1, 2] },
  { id: 2, name: "Chris Evans", movies: [4] }
];
let movies = [
  { id: 1, name: "The Fellowship of the Ring", released: true, rating: 5 },
  { id: 2, name: "The Two Towers", released: true, rating: 3 },
  { id: 3, name: "The Children of Hurin", released: false, rating: null },
  { id: 4, name: "Avengers Endgame", released: true, rating: 3 }
];

//sanity check endpoint
server.get(`/`, (req, res) => {
  res.status(200).json({ api: "up..." });
});

// 1. see a list of movies
server.get(`/api/movies`, (req, res) => {
  // res.status(200).json({ api: "up..." });
  res.status(200).json(movies);
});

// 1. see a list of actors
server.get(`/api/actors`, (req, res) => {
  res.status(200).json(actors);
});

// 2. add a movie to the list
server.post(`/api/movies`, (req, res) => {
  res.status(200).json(actors);
});

// 3. update movie info
server.put(`/api/movies/${id}`, (req, res) => {
  res.status(200).json(actors);
});

// 4. remove a movie
server.delete(`/api/movies/${id}`, (req, res) => {
  res.status(200).json(actors);
});

// 5. see only released movies

// export default server // ES2015 modules
module.exports = server; // CommonJS modules (node). Wrap in object to export multiple items
