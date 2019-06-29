const mongoose = require('mongoose');
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost:27017/badmovies', {
    useNewUrlParser: true
  });
}

const schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  title: String,
  poster_path: String,
  release_date: String,
  popularity: Number
});

const favorites = mongoose.model('favorites', schema);

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to mongo db...');
});

module.exports.favorites = favorites;
