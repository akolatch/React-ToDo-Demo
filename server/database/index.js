const mongoose = require('mongoose');
const dbName = 'example';
const mongoUri = `mongodb://localhost/${dbName}`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const collectionSchema = new mongoose.Schema({
  value: String,
  done: Boolean,
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = {
  Collection,
};
