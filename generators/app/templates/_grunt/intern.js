module.exports = function () {
  return {
    all: {
      options: {
        runType: 'client',
        config: 'tests/intern',
        reporters: ['Console'],
        suites: ['tests/app']
      }
    }
  };
};
