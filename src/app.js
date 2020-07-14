const express = require('express');
const { Artist } = require('./models');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

app.use(express.json());

app.post('/artists', (req, res) => {
  //once the artist is created use . then to make it wait until its
  //created to before passing back the response
  console.log(Artist);
  Artist.create(req.body).then((createdArtist) => {
    console.log(createdArtist);
    res.status(201).send(createdArtist);
  });
});

//app.post('/test', (req, res) =>
//  res.status(200).send({ message: req.body.message })
//);
module.exports = app;
