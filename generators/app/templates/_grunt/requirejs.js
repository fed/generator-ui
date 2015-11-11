module.exports = function () {
  return {
    all: {
      options: {
        baseUrl: 'js/src',
        name: 'main',
        out: 'js/app.min.js',
        optimize: 'uglify2',
        paths: {
          'jquery': 'empty:',
          'hogan': 'empty:'
        },
        cjsTranslate: true
      }
    }
  };
};
