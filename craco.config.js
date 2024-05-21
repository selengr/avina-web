const TerserPlugin = require('terser-webpack-plugin');
const { whenProd, whenDev } = require('@craco/craco');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const zlib = require("zlib");
const CracoEnvPlugin = require('craco-plugin-env')

// eslint-disable-next-line no-undef

module.exports = {
  reactScriptsVersion: 'react-scripts',
  typescript: {
    enableTypeChecking: true,
  },
  eslint: {
    enable: true,
    // mode: 'extends',
  },
  webpack: {
    plugins: {
      plugin: CracoEnvPlugin,
      add: [
        new ProgressBarPlugin({
          format: `\x1b[0m\x1b[38m\ build :current [:bar\x1b[0m\x1b[38m] :total (:elapsed/SEC) \x1b[2m\x1b[37m`,
          complete: '\x1b[0m\x1b[35m⋅',
          incomplete: '\x1b[0m\x1b[2m\x1b[35m∘',
          width: 100,
          clear: true,
          renderThrottle: 0,
          summaryContent: true,
        }),
        ...whenProd(
          () => [
            new UglifyJsPlugin({
              test: /\.js(\?.*)?$/i,
              parallel: true,
            }),
            new CompressionPlugin({
              algorithm: 'gzip',
              // test: /\.js$|\.css$|\.html$/,
              test: /\.(js|css|html)$/,
              threshold: 10,
              minRatio: 1,
              deleteOriginalAssets: false,
            }),
            new CompressionPlugin({
              algorithm: "brotliCompress",
              test: /\.(js|css|html|svg)$/,
              compressionOptions: {
                params: {
                  [zlib.constants.BROTLI_PARAM_QUALITY]: 12,
                },
              },
              deleteOriginalAssets: false,
              threshold: 10,
              minRatio: 1,
            }),
            new TerserPlugin({
              test: /\.js(\?.*)?$/i,
              parallel: true,
              terserOptions: {
                mangle: true, // Note `mangle.properties` is `false` by default.
                module: false,
                ie8: false,
                safari10: false,
              },
            }),
          ],
          [],
        ),
      ],
    },
    optimization: {
      minimizer: [],
      minimize: true,
    },
    cache: {
      type: 'filesystem',
      hashAlgorithm: 'md5',
    },
  },
};
