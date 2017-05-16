var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 

var SRC = path.resolve(__dirname, "src");
var PUBLIC = path.resolve(__dirname, "public");
 
var config = {
    entry: SRC + "/index.js",
    output: {
        path: PUBLIC,
        filename: "game.js"
    },
    module: {
        loaders: [{
            include: SRC,
            loader: "babel-loader",
        },
        {
             test: /\.scss$/,
             loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
        }]
    },
   plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};
 
module.exports = config;
