// dev.js - do not commit
module.exports = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  mongo: {
    uri: process.env.MONGO_URI
  },
  cookie: {
    key: process.env.COOKIE_KEY
  },
  stripe: {
    pubKey: process.env.STRIPE_PUBKEY,
    secKey: process.env.STRIPE_SECKEY
  }
};

// clientId:
// clientSecret:
