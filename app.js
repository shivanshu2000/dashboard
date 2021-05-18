const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Data = require('./data');

const { constants } = require('./constants');

const app = express();
app.use(express.json());
app.use(cors());

const DB = constants.MONGO_URI;

app.get('/', async (req, res, next) => {
  console.log(req.query);
  const region = req.query.region ? req.query.region : '';

  const data = await Data.aggregate([
    {
      $match: {
        sector: {
          $ne: '',
        },
        region: {
          $eq: region,
        },
      },
    },
    {
      $group: {
        _id: '$sector',
        count: { $sum: 1 },
        names: { $push: '$topic' },
      },
    },
  ]);

  res.json(data);
});

app.get('/second', async (req, res, next) => {
  const queryName = req.query.filter;
  let aggregateWith;

  if (queryName === 'Year') {
    aggregateWith = '$end_year';
  } else if (queryName === 'Sector') {
    aggregateWith = '$sector';
  } else if (queryName === 'Topic') {
    aggregateWith = '$topic';
  } else if (queryName === 'Pest') {
    aggregateWith = '$pestle';
  } else if (queryName === 'Source') {
    aggregateWith = '$source';
  } else if (queryName === 'Country') {
    aggregateWith = '$country';
  } else if (queryName === 'City') {
    aggregateWith = '$city';
  } else {
    aggregateWith = '$topic';
  }
  console.log(queryName);

  const data = await Data.aggregate([
    {
      $group: {
        _id: aggregateWith,
        averageIntensity: { $avg: '$intensity' },
        averageRelevance: { $avg: '$relevance' },
        averageLikelihood: { $avg: '$likelihood' },
      },
    },
    {
      $limit: 15,
    },
  ]);

  res.json(data);
});

app.get('/d', async (req, res, next) => {
  const data = await Data.aggregate([
    {
      $match: {
        sector: {
          $ne: '',
        },
        region: {
          $eq: '',
        },
      },
    },
  ]);

  res.json(data);
});

app.get('/d', async (req, res, next) => {
  const data = await Data.aggregate([
    {
      $match: {
        sector: {
          $ne: '',
        },
      },
    },
    {
      $group: {
        _id: '$sector',
        count: { $sum: 1 },
        names: { $push: '$topic' },
      },
    },
  ]);

  res.json(data);
});

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

app.listen(5000);
