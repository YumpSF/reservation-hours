/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const db = require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/:restaurant_id/', express.static(path.join(__dirname, '../public')));

app.get('/api/:restaurant_id/reservation', (req, res) => {
  const id = req.params.restaurant_id;
  db.getReservations(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/api/:restaurant_id/hour', (req, res) => {
  const id = req.params.restaurant_id;
  db.getHours(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(5882, () => {
  console.log('server is up on 5882');
});
