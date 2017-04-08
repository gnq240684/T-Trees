var path = require('path');
const config = {
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    resolve: {
        extensions: [ '', '.ts', '.tsx', '.js', '.jsx']
    }
}
module.exports = config