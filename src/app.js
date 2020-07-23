const express = require('express');
const { Artist } = require('./models');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

app.use(express.json());

app.post('/artists', (req, res) => {
  //once the artist is created use . then to make it wait until its
  //created to before passing back the response
  Artist.create(req.body).then((createdArtist) => {
    res.status(201).send(createdArtist);
  });
});

app.get('/artists', (req, res) => {
  //pulls all the artists in the database and sends them back as an array
  Artist.findAll().then((listArtists) => {
    res.status(200).send(listArtists);
  });
});

app.get(`/artists/:id`, (req, res) => {
  //pulls all the artists in the database by the ID number
  Artist.findByPk(req.params.id).then((listArtists) => {
    if (listArtists) {
      res.status(200).send(listArtists);
    } else {
      res.status(404).send({ error: 'The artist could not be found.' });
    }
  });
});

app.patch(`/artists/:id`, (req, res) => {
  //updates an artist based on the ID passed through
  Artist.update(req.body, { where: { id: req.params.id } }).then(
    ([listArtists]) => {
      console.log(listArtists);
      if (listArtists) {
        res.status(200).send();
      } else {
        res.status(404).send({ error: 'The artist could not be found.' });
      }
    }
  );
});

app.delete(`/artists/:id`, (req, res) => {
  //updates an artist based on the ID passed through
  Artist.destroy({ where: { id: req.params.id } }).then((listArtists) => {
    console.log(listArtists);
    if (listArtists) {
      res.status(204).send();
    } else {
      res.status(404).send({ error: 'The artist could not be found.' });
    }
  });
});
//test post request
//app.post('/test', (req, res) =>
//  res.status(200).send({ message: req.body.message })
//);
module.exports = app;
