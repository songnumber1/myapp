const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },

  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
