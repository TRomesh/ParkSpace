import path from 'path';
import webpack from 'webpack';
import 'react-hot-loader/patch';

export default{
  devtool: 'eval',
  entry:[
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname,'client/index.js')],
  output:{
    path:'/',
    publicPath:'/'
  },
  plugins:[
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ],
  module:{
    loaders:[
      {
        test:/\.js?$/,
        include:path.join(__dirname,'client'),
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.jpe?g$|\.gif$|\.svg$|\.png$/i,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  resolve:{
    extension:['','.js']
  }
}
