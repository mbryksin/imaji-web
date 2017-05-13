var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var devServer = new WebpackDevServer(
    webpack(config),
    {
        contentBase: '/src/',
        publicPath: '/'
    }
).listen(1488, 'localhost');