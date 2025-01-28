const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js',
        auth: './src/auth.js',
        api: './src/API.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].bundle.js"
    },
    mode: "development",
    watch:true,
    optimization: {
        splitChunks: {
          chunks: "all",
        },
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                },
              },
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        devMiddleware: {
            publicPath: '/assets/'
        }
    },
    target: 'web',
}