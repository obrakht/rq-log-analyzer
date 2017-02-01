var path = require('path'),
    srcPath = path.join(__dirname, 'src'),
    buildPath = path.join(__dirname, 'dist');
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: srcPath,
    entry: {
        bundle: path.join(srcPath, 'js', 'client.js'),
        styles: path.join(srcPath, 'scss', 'entry.scss')
    },
    output: {
        path: buildPath,
        filename: "[name].js"
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true })
    ],
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader', 
                    loader: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader', 
                    loader: 'css-loader'
                })
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8008
    },
};