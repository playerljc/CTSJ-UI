const path = require('path');

module.exports = {
  getConfig(config) {
    return {
      entry: {
        index: path.join(__dirname, 'src', 'index.jsx'),
      }, /* ,
      resolve: {
        alias: {
          '@ctsj/ui-split': path.resolve(__dirname, 'src/ctsj-ui-split'),
        },
      }, */
    };
  },
};
