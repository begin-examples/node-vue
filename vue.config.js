module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3333'
      }
    }
  },
  chainWebpack: config => {
    // remove vue-cli-service's progress output
    config.plugins.delete('progress')
    // optionally replace with another progress output plugin
    // `npm i -D simple-progress-webpack-plugin` to use
    config.plugin('simple-progress-webpack-plugin').use(require.resolve('simple-progress-webpack-plugin'), [
      {
        format: 'minimal', // options are minimal, compact, expanded, verbose
      },
    ])
  },
  configureWebpack: {
    stats: 'errors-only'
  }
}
