var webpack = require("webpack");
module.exports = {
	entry: {
		app: "./src/index.js",
		vendor: ["react"]
	},
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
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			}, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	},
	plugins: [ //adding global configuration variables
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: "source-map"
};
