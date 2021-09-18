const path = require("path");

module.exports = {
  outputDir: "./dist",

  // 配置方式一
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: "@/compoments",
  //     },
  //   },
  // },

  //配置方式二
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/components",
  //   };
  // },

  // 配置方式三
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components");
  },
  css: {
    requireModuleExtension: true,
  },
};
