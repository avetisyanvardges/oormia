const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = path.resolve(__dirname);
const { presets, plugins } = require(`${appDirectory}/babel.config.js`);
const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
  '@gorhom/bottom-sheet',
  '@react-native-async-storage/async-storage',
  '@react-native-community/blur',
  '@react-native-community/checkbox',
  '@react-native-community/clipboard',
  '@react-native-seoul/masonry-list',
  '@react-navigation/bottom-tabs',
  '@react-navigation/native',
  '@react-navigation/native-stack',
  '@react-navigation/stack',
  '@reduxjs/toolkit',
  '@twotalltotems/react-native-otp-input',
  'axios',
  'babel-loader',
  'babel-plugin-react-native-web',
  'html-webpack-plugin',
  'lodash',
  'lottie-ios',
  'lottie-react-native',
  'moment',
  'react-hook-form',
  'react-intl',
  'react-intl-redux',
  'react-native-android-location-enabler',
  'react-native-animatable',
  'react-native-date-picker',
  'react-native-device-info',
  'react-native-fast-image',
  'react-native-geocoding',
  'react-native-geolocation-service',
  'react-native-gesture-bottom-sheet',
  'react-native-gesture-handler',
  'react-native-google-places-autocomplete',
  'react-native-image-crop-picker',
  'react-native-image-picker',
  'react-native-keyboard-aware-scroll-view',
  'react-native-linear-gradient',
  'react-native-linear-gradient-degree',
  'react-native-map-clustering',
  'react-native-maps',
  'react-native-modal-datetime-picker',
  'react-native-permissions',
  'react-native-reanimated',
  'react-native-render-html',
  'react-native-safe-area-context',
  'react-native-screens',
  'react-native-shared-element',
  'react-native-svg',
  'react-native-web',
  'react-navigation-shared-element',
  'react-redux',
  'redux-persist',
  'url-loader',
  'webpack',
  'webpack-cli',
  'webpack-dev-server',
  'yup',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/, // Updated to include .jsx
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.web.js'), // Entry to your application
    path.resolve(__dirname, 'App.js'), // Updated to .jsx
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'src/component'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins,
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
};

const jsLoaderConfiguration = {
  test: /\.(js|jsx)$/,
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg|webp)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'rnw.bundle.js',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-maps': 'react-native-web-maps',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      jsLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],
};
