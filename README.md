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

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};


````


