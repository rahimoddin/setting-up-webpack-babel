# Setting up Webpack+Bable

## Intro

Webpack is a module bundler

Config file: .babelrc

## Initialize repository

`npm init`

## Add dev-dependencies

### webpack

`npm install webpack webpack-cli webpack-dev-server --save-dev`

* webpack 

Webpack module bundler

* webpack-cli - 

Command line tool to run webpack commands

* webpack-dev-server

Development server - local development only

### babel

`npm install @babel/cli @babel/core @babel/preset-env --save-dev`

* @babel/cli

Babel command line tool

* @babel/core

Babel transpiler

* @babel/preset-env

Preset for transpiling latest JavaScript syntaxes. ES6, ES7 ...


### loaders

`npm install babel-loader --save-dev`

* babel-loader 

Used to load file for babel to transpile. Other loaders - style-loader, css-loader, sass-loader etc...


# Configure Babel

Create a .babelrc config file and add following configuration to it.

````
{
  "presets": [
    "@babel/preset-env"
  ]
}

````


# Configure Webpack


````

// Imports: Dependencies
const path = require('path');
require("babel-register");
// Webpack Configuration
const config = {
  
  // Entry
  entry: {'PATH TO YOUR INDEX.JSX FILE'},
  // Output
  output: {
    path: path.resolve(__dirname, 'PATH TO SEND BUNDLED/TRANSPILED CODE'),
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  // Plugins
  plugins: [],
};
// Exports
module.exports = config;


````


