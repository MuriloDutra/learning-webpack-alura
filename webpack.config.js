const path = require('path')
const outputPath = path.resolve(__dirname, 'app/dist')//It gets the path since your system root until your current directory
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './app/src/js/app.js',//Entry point of this application
    output: {
        filename: 'bundle.js',//Here you can put any name you want
        path: outputPath,//This is the location where the bundle is gonna be stored
        clean: true
    },
    module: {
        rules: [
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']}
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            '...'//It tells webpack to use his defaults minimizers AND the ones you passed above
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/app.html',
            filename: 'app.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};