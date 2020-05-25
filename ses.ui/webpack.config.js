const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    context: __dirname,
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module:{
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                      loader: 'ts-loader',
                      options: {
                        transpileOnly: true
                      }
                    }
                  ],
                exclude: /node_modules/
            }
        ]
    },
    watch: true,
    resolve:{
        extensions:[".ts", ".tsx", ".js"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename:'index.html'
        })
    ],
    devtool: 'source-map'
}