const mongoose = require('mongoose');
const fs = require('fs');
const { constants } = require('./constants');

const Data = require('./data');

// Connect to DB
mongoose.connect(constants.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const importData = async () => {
  try {
    await Data.create(data);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Data.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
