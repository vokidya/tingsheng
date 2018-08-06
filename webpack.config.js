const path = require('path');
const root = path.resolve(__dirname, '.'); // 项目的根目录绝对路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: path.join(root, 'src/main.js'),

  output: {
    path: path.join(root, 'build'), // 出口目录
    filename: 'vendor.js'
  },

  module: { // 配置loader
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }, // 所有.vue结尾的文件，使用vue-loader
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      } // .js文件使用babel-loader，切记排除node_modules目录
    ]
  },

  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    // new HtmlWebpackPlugin({
    //   template: path.join(root, 'index.html'), // 模板文件
    //   inject: 'body' // js的script注入到body底部
    // })
  ]
};