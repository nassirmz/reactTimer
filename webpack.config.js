var webpack = require('webpack');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Nav: 'app/components/Nav.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Timer: 'app/components/Timer.jsx',
      Clock: 'app/components/Clock.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss/,
        loader: 'style!css!sass'
      },
      { test: /\.css/,
        loader: 'style!css'
      },
      { test: /\.(woff2|woff|ttf|svg|eot)$/,
        loader: 'file'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
