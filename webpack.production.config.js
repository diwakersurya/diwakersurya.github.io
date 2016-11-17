var webpack = require("webpack");
module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + "/js/",
		publicPath: "/js/",
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}, {
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
			}, {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
			}, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	},
	plugins: [//adding global configuration variables
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: "source-map"
};
