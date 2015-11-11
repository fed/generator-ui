module.exports = function () {
  return {
    all: [
      'Gruntfile.js',
      'grunt/{,**/}*.js',
      'tests/{,**/}*.js',
      'js/src/{,**/}*.js'
    ],
    options: {
      jshintrc: 'grunt/conf/jshintrc.json'
    }
  };
};
