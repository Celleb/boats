const fs = require('fs-extra');
const packageJson = require('../../package');

describe('Check to ensure the files are generated with the correct file names:', () => {
  const paths = [
    'build/builtOA3_' + packageJson.version + '.yml',
    'build/builtOA3.yml'
  ];
  for (let i = 0; i < paths.length; ++i) {
    it(paths[i], (done) => {
      const filePath = paths[i];
      if (fs.pathExistsSync(filePath)) {
        return done();
      }
      return done('Not found filePath: ' + filePath);
    });
  }
});
