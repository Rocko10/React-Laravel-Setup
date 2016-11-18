module.exports = {
    entry: './resources/assets/js/Main.jsx',
    output: {
        path: './public/js/',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-es2015', 'babel-preset-react']
                }
            }
        ]
    }
};