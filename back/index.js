const mongoose = require('mongoose');
const app = require('./app');

const DB = 'mongodb://localhost/lexicon';
const PORT = 3000;

const server = async () => {
  try {
    await mongoose
          .connect(DB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
          })
          .then(() => console.log('DB connection!'));

    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}...`);
    });
  } catch (e) {
    console.error('Server Error', e.message);
    process.exit(1);
  }
};

server();