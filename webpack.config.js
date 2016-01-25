module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {
    entry: './app/scripts/main.js',
    output: {
      path: __dirname,
      filename: 'main.js'
    },
    debug : isDev,
    module: {
      loaders: [
        { test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: { presets: ['react', 'es2015'] } 
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader'
        }
      ]
    }
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}