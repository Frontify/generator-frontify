'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var FrontifyGenerator = yeoman.generators.Base.extend({
  init: function () {
    // this.pkg = require('../package.json');
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();
    
    var prompts = [{
      name: 'applicationName',
      message: 'What do you want to call your application?'
    }];

    this.prompt(prompts, function (props) {
      this.applicationName = props.applicationName;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/api');
    this.mkdir('src/api/app');
    this.mkdir('src/assets');
    this.mkdir('src/assets/css');
    this.mkdir('src/assets/img');
    this.mkdir('src/assets/js');
    this.mkdir('src/modules');
    this.mkdir('src/views');

    this.copy('_index.js', 'src/index.js');
    this.template('_package.json', 'package.json');
    this.directory('api', 'src/api');
    this.directory('assets', 'src/assets');
    this.directory('modules', 'src/modules');
    this.directory('views', 'src/views');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
  }
});

module.exports = FrontifyGenerator;