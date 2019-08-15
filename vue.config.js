const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumjs = '../Build/Cesium/Cesium.js';
const cesiumWorkers = '../Build/Cesium/Workers';
const cesiumThirdParty = '../Build/Cesium/ThirdParty';



module.exports = {
	configureWebpack: {
		amd: {
			toUrlUndefined: true
		},
		plugins: [
			new CopyWebpackPlugin([
				{ from: path.join(cesiumSource, cesiumjs), to: 'Cesium/Cesium.js' },
				{ from: path.join(cesiumSource, cesiumThirdParty), to: 'Cesium/ThirdParty' },
				{ from: path.join(cesiumSource, 'Assets'), to: 'Cesium/Assets' },
				{ from: path.join(cesiumSource, 'Widgets'), to: 'Cesium/Widgets' },
				{ from: path.join(cesiumSource, cesiumWorkers), to: 'Cesium/Workers' }
			]),
			new webpack.DefinePlugin({
				CESIUM_BASE_URL: JSON.stringify('Cesium')
			})
		]
	}

}