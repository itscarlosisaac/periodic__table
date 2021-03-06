
// Webpack configuration file 

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) =>  {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css') // Name of the output file extracted
    return { 
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            contentBase: path.join(__dirname, 'dist')
        }
    }
}