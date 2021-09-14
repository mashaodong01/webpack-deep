const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: '../src/pages/home/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            // 常用配置
            title: "首页",   // 还需要在title标签中设置<title><%= htmlWebpackPlugin.options.title%></title>
            template: "../template/index.html",   
            filename: "index.html",
            // 压缩HTML文件
            // minify: {
            //     removeComments: true,     // 移除HTML中的注释  
            //     collapseWhitespace: true, // 删除空白符和换行
            //     minisyCSS: true           // 压缩内联css
            // }
        }),
      
    ]
}