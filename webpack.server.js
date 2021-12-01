const path=require('path')
const webpackNodeExternals=require('webpack-node-externals');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin');
module.exports={
    target:'node',
    entry:'./server/index.js',
    devtool:'source-map',
    output:{
        filename:'bundle.js',
        // chunkFilename: '[name].js',
        path:path.resolve(__dirname,'build/server')
    },
    // plugins: [new MiniCssExtractPlugin(),
    //     // new LoadablePlugin({ filename: 'loadable-stats-dev.json'}),
    //     // '@loadable/babel-plugin',
        
    //     // [
    //     //     "babel-plugin-styled-components"
    //     // ]
    // ],
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            options:{
                presets:['@babel/preset-react','@babel/preset-env'],
                plugins:['@loadable/babel-plugin','@babel/plugin-syntax-dynamic-import']
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
    // externals:[webpackNodeExternals()]
}