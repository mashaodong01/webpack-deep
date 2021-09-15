const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/pages/home/index.js',
        my: './src/pages/my/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './js/[name]-[hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: "imgs/"
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 常用配置
            title: "首页",   // 还需要在title标签中设置<title><%= htmlWebpackPlugin.options.title%></title>
            template: "./template/index.html",   
            filename: "index.html",
            // 压缩HTML文件
            // minify: {
            //     removeComments: true,     // 移除HTML中的注释  
            //     collapseWhitespace: true, // 删除空白符和换行
            //     minisyCSS: true           // 压缩内联css
            // }
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        // watchOptions: {
        //   ignored: /node_modules/
        // },
        host: 'localhost',
        port: 3300
    }
}