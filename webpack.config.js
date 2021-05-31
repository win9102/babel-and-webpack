const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtreactPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry:{
        main: './src/app.js'
    },
    output : {
        path : path.resolve('./dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    MiniCssExtreactPlugin.loader,
                    // 'style-loader',
                    'css-loader' 
                ]
            },
            {
                test :/\.(png|jpg|gif|svg)$/,
                loader:'url-loader',
                options:{
                    // publicPath : './dist/',
                    name:'[name].[ext]?[hash]',
                    limit:20000,//20kb
                }
               
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin({
            banner:`Build Date: ${new Date().toLocaleString()}`
        }),
        new webpack.DefinePlugin({
            TWO : JSON.stringify('1+1')
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
        new CleanWebpackPlugin(),
        
        new MiniCssExtreactPlugin({
            filename: '[name].css'
        })
    ]
}