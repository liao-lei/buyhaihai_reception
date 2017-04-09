var webpack = require("webpack");
var path = require("path");
module.exports = {
	//指定入口文件
	entry:{
		register:path.join(__dirname,"public/js/register.js"),
		login:path.join(__dirname,"public/js/login.js"),
		main:path.join(__dirname,"public/js/main.js"),
		gdsdetails:path.join(__dirname,"public/js/gdsdetails.js"),
		shoppimgcart:path.join(__dirname,"public/js/shoppimgcart.js"),
		order:path.join(__dirname,"public/js/order.js")
	},

	// plugins: [
	// 			new webpack.optimize.CommonsChunkPlugin('plugins.js')
	// 	],

	//指定打包后输出的路径和文件名
	output:{
		path:path.join(__dirname,"public/js/dist"),
		filename:"[name].bundle.js"
	},
	//配置加载器
	module:{
		loaders:[
			{test:/\.css$/,loader:"style!css"},
			{test:/\.less$/,loader:"style!css!less"},
			// {test:/\.jsx?$/,exclude:/node_modules/,loader: 'jsx?harmony'},
			{test:/\.(png|jpg)$/,loader:"url?limit=8192"}
		]
	},
	//配置模块的别名
	resolve:{
		root:path.join(__dirname,"public"),
		extensions:['','.js'],
		alias:{
			"autosize":"js/auto-size",
			"touch":"js/touch",
			"zepto":"js/zepto.min",
			"query":"js/jquery.query",
			"handlebars":"js/handlebars.min",
			"common":"js/common"
		}
	}
};
