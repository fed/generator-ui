module.exports = function () {
  return {
    all: {
      options: {
        hostname: '*',
        port: process.env.PORT || '6789',
        base: ['.'],
        livereload: true,
        open: true
      }
    }
  };
};
