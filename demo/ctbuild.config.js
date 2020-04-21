const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    curModule.entry.index = path.join(__dirname, 'src', 'index.tsx');

    curModule.resolve.alias = {
      '@ctsj/ui': path.join(__dirname, 'src', 'packages'),
      '@': path.join(__dirname, 'src'),
    };
  },
};
