const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: __dirname + "/app/main.js", //项目入口文件
  output: {
    path: __dirname + "/build", //项目出口文件路径
    filename: "bundle.js", //出口文件名
  },
  devtool: "eval-source-map", //编译文件和源文件的映射
  //有四种值可以设置
  /*
  1.source-map: 行列映射
  2.cheap-module-source-map: 行映射
  3.eval: eval打包,开发阶段使用,有安全隐患
  4.cheap-module-eval-source-map: 有安全隐患,行映射
  */
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },{
              loader:"postcss-loader"
          }
        ],
      },
    ],
  },
  plugins:[
      new webpack.BannerPlugin("版权归vincent所有,翻版必究"),
      new HtmlWebpackPlugin({
          template:__dirname+'/app/index.tmpl.html'
      })
  ]
};
