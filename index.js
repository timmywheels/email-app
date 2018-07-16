const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(
  `mongodb://${keys.mongo.user}:${keys.mongo.pass}${keys.mongo.uri}`,
  {
    useNewUrlParser: true
  },

  function(err, db) {}
);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
