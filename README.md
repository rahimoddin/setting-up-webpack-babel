# Setting up Webpack+Bable

## Intro

Webpack 
- a JavaScript compiler*
- transforms syntax (mainly used to convert ECMAScript 2015+ code into backward compatible version)
- polyfill features that are missing in target environment (@bable/polyfill)
- config: .babelrc/babel.config.js/package.json


Plugins and Presets
- plugins are small js programs to carry out transformation
- https://babeljs.io/docs/en/plugins
- preset acts as an array of plugins
- determines plugins, polyfills needed for target environment
- @babel/preset-env - 
  - smart preset that transforms latest syntax
  - with a `target` option loads plugins required only
  - `useBuiltIns` option uses only polyfill required by the target environment 
- https://babeljs.io/docs/en/babel-preset-react

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
  //entry file
  entry: './src/index.js',
  //output file and path
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        //target all .js files excluding node_modules and
        // babel-loader used to load js files and transpile them
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  //dev-server to server the content of dist folder on port 9000
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  //watch - canbe passed on cli command as well
  //watch: true
};


````


# Get up and running

- checkout the repo: `git clone https://github.com/rahimoddin/setting-up-webpack-babel.git`
- Install dependencies: `npm install`
- Run dev-sever: `npm run start:dev` or
- Simply run webpack: `npm run watch`
- Happy coding :)
