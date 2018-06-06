module.exports = {
    entry: './src/main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"}, // creates style nodes from JS strings
                    {loader: "css-loader"}, // translates CSS into CommonJS
                    {loader: "sass-loader"} // compiles Sass to CSS

                ]
            },
            {
                test: /\.ts$/,
                use: [
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true
                    }
                  }
                ]
              }
        ],
    }
};