var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if (process.env.HEROKU_USING === 'YES') {
  mongoose.connect(process.env.MONGOLAB_URI);
} else if (process.env.HEROKU_USING === 'NO') {
  mongoose.connect('mongodb://localhost:27017/todoapp');
}

module.exports = { mongoose };
