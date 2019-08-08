const path = require('path');

module.exports = {
  getConfig(config) {
    return {
      resolve: {
        alias: {
          '@ctsj/ui-split': path.resolve(__dirname, 'src/ctsj-ui-split'),
        },
      },
    };
  },
};
