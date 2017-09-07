/**
 * webpack client 基本配置
 */
var path = require('path')

module.exports = {
    entry: {
        'hello-with-babel-loader': path.join(__dirname, './entry.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'nosources-source-map',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
}