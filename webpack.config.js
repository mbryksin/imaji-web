const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname + "/src",

    entry: {
        app: "./app.js",
        vendor: ['react', 'react-dom', 'react-router'],
    },

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: '[name].[hash].js',
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
    ],

};