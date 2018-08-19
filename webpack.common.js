const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['./pages/root/root.js'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename: 'chunks/[id].[chunkhash].js',
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: { minimize: true }
            }
        },
        {
            test: /\.scss$/,
            use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
            ]
        },
        {
            test: /\.(png|jpg|gif|pdf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            ]
        }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './pages/root/root.html',
            filename: 'root.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}