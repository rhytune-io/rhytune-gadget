const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            import: [
              path.resolve(__dirname, './src/assets/common.styl'),
            ],
          },
        },
      }),
    ],
  },
};
