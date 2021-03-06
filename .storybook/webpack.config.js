const path = require('path')

module.exports = (storybookBaseConfig, configType) => {

  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
    include: path.resolve(__dirname, '../')
  })

  storybookBaseConfig.resolve.alias =
    {
      vue: 'vue/dist/vue.js',
      "~": path.resolve(__dirname, "node_modules/")
    }

  return storybookBaseConfig
}
