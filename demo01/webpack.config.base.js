const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader执行顺序是从后向前
        // css-loader 言简意赅 把css模块内容加到js模块
        // css in js方式
        // style-loader 从js中提取css的loader在html中创建
        include: path.resolve(__dirname, "./src"), // 设置编译范围，构建更快
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true  // 开启css模块化
            }
          },
          {
            loader: "postcss-loader",  // 用来添加前缀，做css的浏览器兼容
          },
          "less-loader"   // 解析less
        ]  
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use:{
          loader: "file-loader",
          options: {
            name: "[name]_[hash:6].[ext]",  // 打包后文件名————原名_6位hash.原后缀
            outputPath: "images/"           // 设置一个文件夹路径
          }
        }
      },
           //   推荐用url-loader   因为它支持limit
      {   //    url-loader有file-loader中所有的功能，完全可替代它，还增加了自己的功能
        test: /\.(png|jpe?g|gif)$/,
        use:{
          loader: "url-loader",
          options: {
            name: "[name]_[hash:6].[ext]",  // 打包后文件名————原名_6位hash.原后缀
            outputPath: "images/",           // 设置一个文件夹路径
            limit: 2 * 1024,               // 小于2k的图片被转成Base64格式
          }
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",           // 解析es6
      //     options: {
      //       // 语法转换插件 preset-env
      //       presets: [
      //         ["@babel/preset-env", {
      //           targets: {            // 兼容浏览器版本
      //             edge: "17",
      //             firefox: "60",
      //             chrome: "67",
      //             safari: "11.1"
      //           },
      //           corejs: 2,
      //           useBuiltIns: "usage"
      //         }]
      //       ]
      //     }
      //   }
      // }
    ]
  },
  resolve: {
    // 查找第三方依赖
    modules: [path.resolve(__dirname, "./node_modules")],
    alias: {
      // 减少查找过程
      // 起别名
      "@": path.resolve(__dirname, "./src/css"),
      react: "./node_module... ...",
      "react-dom": "./node_module... ...",
    },
    // 设置在加载模块时，可以不写后缀，按下面的顺序依次查找
    // 会消耗一些性能，推荐写代码直接写上后缀名
    extensions: [".js", ".json", ".jsx"]
  },
  plugins: [new CleanWebpackPlugin()]
} 