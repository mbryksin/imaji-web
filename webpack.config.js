const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, '/client/'),
        vendor: ['react', 'react-dom', 'react-router'],
    },

    output: {
        filename: 'bundle.[hash].js',
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
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: '[name].[hash].js',
        }),

        new ExtractTextPlugin('style-[hash].css'),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/client/index.html'),
            filename: 'index.html',
            inject: 'body',
        })

    ],

};