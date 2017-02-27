#!/usr/bin/env node

'use strict';

process.bin = process.title = 'setlife';

var program = require('commander');
var pkg = require('./package.json');
var fs = require('fs-extra');
var path = require('path');
var ejs = require('ejs');
var _ = require('lodash');

var generateComponent = function(name, options) {
    console.log('Creating ' + name + ' component...');

    var templatePath = path.join(process.cwd(), 'src/templates', 'component.ejs');
    var destinationPath = path.join(process.cwd(), 'src/components', name + '.jsx');
    var redux = options.redux;

    fs.readFile(templatePath, 'utf8', function(err, data) {
        var component = ejs.render(data, {
            name: name,
            redux: options.redux || false
        });

        fs.writeFile(destinationPath, component);
        console.log('Created component:  ' + name + '...');
    });
};

var generateStylesheet = function(name) {
    console.log('Creating ' + name + ' stylesheet...');

    var styleTemplate = path.join(process.cwd(), 'src/templates', 'stylesheet.ejs');
    var styleDestination = path.join(process.cwd(), 'src/styles', name + '.less');

    fs.readFile(styleTemplate, 'utf8', function(err, data) {
        var stylesheet = ejs.render(data, { name: name });

        fs.writeFile(styleDestination, stylesheet);
        console.log('Created stylesheet:  ' + name + '...');
    });
};

var addStyleToIndex = function(name) {
    console.log('Adding ' + name + ' stylesheet to index...');

    var stylesIndexPath = path.join(process.cwd(), 'src/styles', 'index.less');

    fs.readFile(stylesIndexPath, 'utf8', function(err, indexedStyles) {
        var mainStyles = indexedStyles.substring(0, indexedStyles.indexOf('// Component styles'));
        var newStyleIndex = mainStyles + '// Component styles';

        var importLines = indexedStyles.split('@import ');
        var componentStyles = _.reduce(importLines, function(e, k, i) {
            if (k.toLowerCase() != k) {
                e.push(k.replace(/(\n)|(\')|(;)/g, ''));
            }
            return e;
        }, []);
        componentStyles.shift();
        componentStyles.push(name);
        componentStyles.sort();
        componentStyles.forEach(function(e, i) {
            newStyleIndex += '\n@import \'' + e + '\';';
        });

        fs.writeFile(stylesIndexPath, newStyleIndex);
        console.log('Added stylesheet:  ' + name + ' to index...');
    });
};

// Parse command line options

program
    .version(pkg.version)
    .usage('<command> [options]');

program
    .command('create-component <name>')
    .option('-s, --style', 'Create dedicated stylesheet')
    .option('-r, --redux', 'Connect Redux state mappings')
    .description('Generate a new React component.')
    .action(function(name, options) {
        generateComponent(name, options);
        
        var style = options.style;

        if (style) {
            generateStylesheet(name);
            addStyleToIndex(name);
        }
    });


// Failsafe that shows the help dialogue if the command is not recognized (`$ react xyz`)
program.on('*', function(opt) {
    program.help();
});

program.parse(process.argv);

// Handle case where no command is passed (`$ react`)
if (!process.argv.slice(2).length) {
    program.help();
}
