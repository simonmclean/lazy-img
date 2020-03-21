const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/lazy-image-element',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lazy-image-element.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
