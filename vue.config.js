const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {
  lintOnSave:false,
  configureWebpack: {
    resolve: {
      extensions: [".js", "vue", ".json"], //这些文件的后缀名可以不写
      alias: {
        base: resolve("src/base"),
        api: resolve("src/api"),
        components: resolve("src/components"),
        assets: resolve("src/assets"),
        pages: resolve("src/pages")
      }
    }
  }
};
