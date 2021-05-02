## 🧁NOTE

### 在终端中使用 webpack

```shell
$ npx webpack {entry file} --output {destination for bundle file}
```

1. {entry file} 打包入口文件 本例中的 main.js
2. {destination for bundled file} 出口文件的存放路径

---

### 通过配置文件使用 webpack

```shell
$ npx webpack
```

`自动读取 webpack.config.js 文件的配置`

1. entry: 入口文件路径
2. output: 出口文件路径和文件名

---

### 通过 npm 预设脚本启动

1. 添加 script 脚本命令和对应的实际命令
2. start 是特殊的脚本名称,其他自定义脚本需要使用 npm run scriptname 启动,start 不用

---

### devtool 配置项

**解决调试时因为打包依赖嵌套找不到出错地方的问题**

1. 对应编译文件和源文件
2. hash
3. 配置选项
4. source-map: 行列映射
5. cheap-module-source-map: 行映射
6. eval: eval 打包,开发阶段使用,有安全隐患
7. cheap-module-eval-source-map: 有安全隐患,行映射

---

### devserver 配置项

**本地开发服务器**

1.  contentBase 为哪个目录提供服务器
2.  port 监听端口
3.  inline 源文件改变时自动刷新页面
4.  historyApiFallback SPA 应用时使用

---

### loaders 配置项

`编译转换`

1. 配置选项

- test: 匹配文件后缀的正则表达式
- loader: loader 的名称
- include/exclude: 手动添加必须处理的文件和文件夹
- query: 为 loaders 提供额外的设置选项

2. Babel
   **javascript 转换器**

- 是几个不同转换功能的包的集合
- 单独配置文件 .babelrc,webpack 会自动读取

3. CSS loaders

- css-loader 使能够使用@import,url(...)实现 require 功能
- style-loader 将计算后的样式加入页面中

---

### 预处理器

1. Less,Sass,Stylus -loader 语法转换
2. postcss-loader 为不同浏览器添加响应前缀

---

### 插件

**拓展 webpack 功能在整个构建过程起作用**

1. 与 loaders 的关系:pugins 不单独操作单个文件,其对整个过程起作用
2. 使用:下载包，添加实例在 plugins 数组中
3. 常用插件
4. HtmlWebpackPlugin
   **依据一个模板自动生成引用打包生成的 js 文件**
5. Hot Module Replacment (HMR)
   **修改代码后,自动刷新预览效果**
