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
	plugins: [new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015','stage-3', 'react-hmre']
				}
			}, {
				test: /\.css$/,
				loaders: ["style", "css?modules&localIdentName=[local]---[hash:base64:5]", "cssnext"]
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
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
	devtool: "source-map"
};
