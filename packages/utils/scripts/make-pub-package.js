const fs = require('fs');
const path = require('path');
const { name, private, version } = require('../package.json');

const newPackage = { name, private, version };

fs.writeFileSync(
  path.resolve('./dist/package.json'),
  JSON.stringify(newPackage, null, 2),
);
