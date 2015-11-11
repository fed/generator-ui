module.exports = function () {
  return {
    js: {
      files: [
        'Gruntfile.js',
        'grunt/{,**/}*.js',
        'tests/{,**/}*.js',
        'js/src/**/*.{js,mustache}',
        '!js/src/template.js'
      ],
      tasks: ['js'],
      options: {
        livereload: true
      }
    },
    css: {
      files: ['css/src/{,**/}*.{sass,scss,css}'],
      tasks: ['css'],
      options: {
        livereload: true
      }
    },
    json: {
      files: ['model/{,**/}*.json'],
      tasks: ['json'],
      options: {
        livereload: true
      }
    },
    general: {
      files: ['{,**/}*.html'],
      options: {
        livereload: true
      }
    }
  };
};
