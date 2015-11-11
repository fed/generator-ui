module.exports = function () {
  return {
    all: {
      src: 'js/src/{,**/}*.mustache',
      dest: 'js/src/template.js',
      options: {
        binderName: 'amd'
      }
    }
  };
};
