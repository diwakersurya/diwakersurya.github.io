module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + "/js/",
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
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: "source-map"
};
