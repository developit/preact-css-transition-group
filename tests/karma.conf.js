/* eslint-env node */
const path = require('path');

// to run with specific preact file:
//   $ PREACT_FILE=/path/to/preact.js npm test
// to test with specific preact version (loaded from npm):
//   $ npm run peer:preact -- 5.7.0
//   $ PREACT_VERSION=5.7.0 npm test
const preactFile = process.env.PREACT_FILE
	? path.resolve(__dirname, '..', process.env.PREACT_FILE)
	: null;
const preactVersion = process.env.PREACT_VERSION
	? path.resolve(__dirname, 'preact-versions', process.env.PREACT_VERSION + '.js')
	: null;

module.exports = function(config) {
	config.set({
		basePath: '..',
		frameworks: ['mocha', 'chai-sinon'],
		reporters: ['mocha'],

		browsers: [process.env.KARMA_BROWSERS || 'PhantomJS'],

		files: [
			'tests/**/*.js'
		],

		exclude: [
			'tests/preact-versions/**/*.js'
		],

		preprocessors: {
			'tests/**/*.js': ['webpack'],
			'src/**/*.js': ['webpack'],
			'**/*.js': ['sourcemap']
		},

		client: {
			mocha: {
				timeout: 6000
			}
		},

		webpack: {
			module: {
				loaders: [
					{
						test: /\.jsx?$/,
						exclude: /node_modules/,
						loader: 'babel',
						query: {
							sourceMap: 'inline',
							presets: ['es2015-loose', 'stage-0', 'react'],
							plugins: [
								'transform-class-properties',
								'transform-object-rest-spread',
								['transform-react-jsx', { pragma:'h' }]
							]
						}
					},
					{
						test: /\.css$/,
						loader: 'style!css'
					}
				]
			},
			resolve: {
				modulesDirectories: [
					path.resolve(__dirname, '..'),
					'node_modules'
				],
				alias: {
					src: path.resolve(__dirname, '..', 'src'),
					preact: preactFile || preactVersion || 'preact'
				}
			}
		},

		webpackMiddleware: {
			noInfo: true
		}
	});
};
