import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default [
  {
    //🎎INPUT/OUTPUT
    entry: {
      index: './src',
    },
    output: {
      path: './dist',
      filename: '[name].js',
      libraryTarget: 'umd',
    },
    externals: ['react'],

    //⚙️PROCESSING
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]_[hash:base64:8]',
              }
            },
          })
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ],

    //🍬MISC
    devtool: 'source-map',
  },
]