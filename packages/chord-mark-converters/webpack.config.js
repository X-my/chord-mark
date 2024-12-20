const path = require('path');

const buildDir = 'lib';

const config = {
	context: __dirname,
	target: 'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-mark-converters': './src/chordMarkConverters.js',
	},

	output: {
		filename: '[name].js',
		clean: true,
		path: path.resolve(__dirname, buildDir),
		library: {
			name: 'chord-mark-converters',
			type: 'umd',
		},
	},

	optimization: {
		minimize: false,
	},

	performance: {
		hints: false,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
};

module.exports = config;
