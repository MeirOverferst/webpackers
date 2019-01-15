const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminJpegoptim = require('imagemin-jpegoptim');

module.exports = {
    mode: 'development',
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?/i,
                exclude: /node_modules/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s?css?/i,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader

                    },
                    'css-loader',
                    'sass-loader'
                ]


            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '../index.html'
        }),
        new miniCssExtractPlugin({
            filename: '../styles/main.css'
        }),

        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)?/,
            plugins: [
                ImageminJpegoptim({
                    size: '60%',
                    progressive: true
                })
            ]
        })
    ]
}