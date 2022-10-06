module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,PNG,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};