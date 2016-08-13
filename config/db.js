require('dotenv').config();

function getMongoUri() {
  return process.env.MONGODB_URI;
}

module.exports = {
  getMongoUri
};
