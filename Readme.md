# 在终端中使用webpack
*命令：npx webpack {entry file} --output {destination for bundle file*
1. {entry file} 打包入口文件 本例中的main.js
2. {destination for bundled file} 出口文件的存放路径
---
# 通过配置文件使用webpack
*命令：npx webpack* 
**自动读取webpack.config.js文件的配置**
1. entry: 入口文件路径
2. output: 出口文件路径和文件名
---
# 通过npm预设脚本启动
1. 添加script 脚本命令和对应的实际命令
2. start是特殊的脚本名称,其他自定义脚本需要使用npm run scriptname启动,start不用
---
# devtool 配置项
**解决调试时因为打包依赖嵌套找不到出错地方的问题**
1. 对应编译文件和源文件
2. hash
3. 配置选项
  1. source-map: 行列映射
  2. cheap-module-source-map: 行映射
  3. eval: eval打包,开发阶段使用,有安全隐患
  4. cheap-module-eval-source-map: 有安全隐患,行映射
---
# devserver 配置项
**本地开发服务器**
2. 配置选项
 1. contentBase 为哪个目录提供服务器
 2. port 监听端口
 3. inline 源文件改变时自动刷新页面
 4. historyApiFallback SPA应用时使用
 ---
# loaders 配置项
**编译转换**
1. 配置选项
 1. test: 匹配文件后缀的正则表达式
 2. loader: loader的名称
 3. include/exclude: 手动添加必须处理的文件和文件夹
 4. query: 为loaders提供额外的设置选项
---
2. Babel 
**javascript转换器**
1. 是几个不同转换功能的包的集合
2. 单独配置文件 .babelrc,webpack会自动读取
---
3. CSS loaders
1. css-loader 使能够使用@import,url(...)实现require功能
2. style-loader 将计算后的样式加入页面中
### 预处理器
1. Less,Sass,Stylus -loader 语法转换
2. postcss-loader 为不同浏览器添加响应前缀
---
# 插件
**拓展webpack功能在整个构建过程起作用**
1. 与loaders的关系:pugins 不单独操作单个文件,其对整个过程起作用
2. 使用:下载包，添加实例在plugins数组中
3. 常用插件
 1. HtmlWebpackPlugin 
 **依据一个模板自动生成引用打包生成的js文件**
 2. Hot Module Replacment (HMR)
 **修改代码后,自动刷新预览效果**
 
