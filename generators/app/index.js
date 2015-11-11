'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the premium ' + chalk.red('ui') + ' generator!'
    ));

    var prompts = [
      {
        type: 'confirm',
        name: 'generatorUpToDate',
        message: 'have you run: npm -g update generator-ui?',
        default: false
      },
      {
        type: 'input',
        name: 'project',
        message: 'project name?',
        filter: function (input) {
          return input.toLowerCase();
        },
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'description?',
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'repository',
        message: 'repository url?',
        filter: function (input) {
          return input.toLowerCase();
        },
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'license',
        message: 'license?',
        default: 'MIT',
        filter: function (input) {
          return input.toUpperCase();
        },
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'your name?',
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'your email address?',
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      if (props.generatorUpToDate) {
				done();
			} else {
				this.log('please make sure your generator is up-to-date');
				process.exit(1);
			}
    }.bind(this));
  },

  writing: {
    app: function () {
      // css folder
      this.directory(
        this.templatePath('_css'),
        this.destinationPath('css')
      );
      // js folder
      this.directory(
        this.templatePath('_js'),
        this.destinationPath('js')
      );
      // model folder
      this.directory(
        this.templatePath('_model'),
        this.destinationPath('model')
      );
      // tests folder
      this.directory(
        this.templatePath('_tests'),
        this.destinationPath('tests')
      );
      // index.html
      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('index.html'),
        {
          project: this.props.project,
          description: this.props.description
        }
      );
      // package.json
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          project: this.props.project,
          description: this.props.description,
          repository: this.props.repository,
          license: this.props.license,
          username: this.props.username,
          email: this.props.email
        }
      );
      // README.md
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        {
          project: this.props.project,
          description: this.props.description
        }
      );
    },

    projectfiles: function () {
      // CHANGELOG.md
      this.fs.copy(
        this.templatePath('_CHANGELOG.md'),
        this.destinationPath('CHANGELOG.md')
      );
      // AUTHORS.md
      this.fs.copy(
        this.templatePath('_AUTHORS.md'),
        this.destinationPath('AUTHORS.md')
      );
      // .travis.yml
      this.fs.copy(
        this.templatePath('travis.yml'),
        this.destinationPath('.travis.yml')
      );
      // .editorconfig
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      // .gitignore
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      // Gruntfile.js
      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      // grunt folder
      this.directory(
        this.templatePath('_grunt'),
        this.destinationPath('grunt')
      );
    }
  },

  install: function () {
    this.installDependencies({ bower: false });
  }
});
