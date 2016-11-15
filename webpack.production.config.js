module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + "/Dist/js/",
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'react-hmre']
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
