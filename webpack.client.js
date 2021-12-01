const path=require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin');
// const babelPluginStyledComponents=require('babel-plugin-styled-components')
module.exports={
    entry:'./client/index.js',
    output:{
        filename:'bundle.js',
        // chunkFilename: '[name].js',
        path:path.resolve(__dirname,'build/client')
    },
    plugins: [new MiniCssExtractPlugin(),
        new LoadablePlugin({ filename: 'loadable-stats-dev.json'}),
        // [
		// babelPluginStyledComponents
        // ]
        ],
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            options:{
                presets:['@babel/preset-react','@babel/preset-env'],
                // plugins:['@loadable/babel-plugin','@babel/plugin-syntax-dynamic-import']
            }
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: 'file-loader',
            options: {
              name: '/public/images/[name].[ext]'
            }
        },
        {
            test: /\.css$/i,
            // use: [MiniCssExtractPlugin.loader, "css-loader"],
            use: ["style-loader", "css-loader"],
        }
    ]
    },
    
}