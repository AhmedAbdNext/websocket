// vite.config.js

const path = require('path');

module.exports = {
  root: path.resolve(__dirname, 'client'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  esm: "babel"
};
