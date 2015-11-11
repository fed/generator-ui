module.exports = function () {
  return {
    options: {
      csslintrc: 'grunt/conf/csslintrc.json'
    },
    all: {
      src: ['css/{,**/}*.css']
    }
  };
};
