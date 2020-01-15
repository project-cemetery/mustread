const { readFileSync } = require('fs');
const { join } = require('path');

const LIST_PATH = 'mustread.md';

const mustread = readFileSync(join(__dirname, LIST_PATH)).toString();

module.exports = {
  locals: {
    mustread,
    md: require('marked'),
  },
};
