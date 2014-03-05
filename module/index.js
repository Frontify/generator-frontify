'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the module subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.mkdir('src/modules/' + this.name);
    this.copy('_module.js', 'src/modules/' + this.name + '/js/' + this._.slugify(this.name) + '.js');
    this.copy('_module.less', 'src/modules/' + this.name + '/css/' + this._.slugify(this.name) + '.less');
    this.copy('_module.html', 'src/modules/' + this.name + '/' + this._.slugify(this.name) + '.html');
  }
});

module.exports = ModuleGenerator;