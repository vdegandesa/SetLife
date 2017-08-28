var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var buildPath = path.resolve(__dirname, 'public');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js',
	],
	devServer: {
		contentBase: './src',
		historyApiFallback: true,
		inline: true,
		hot: true
	},
	output: {
		path: buildPath,
		filename: 'bundle.js',
		pathinfo: true
	},
	resolve: {
		extensions: ['.jsx', '.js', '.less', '.css'],
		moduleExtensions: ['node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			'Promise': 'exports?global.Promise!es6-promise',
			'fetch': 'exports?self.fetch!whatwg-fetch'
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
}
