"use strict";

const webpack = require('webpack');
const path = require('path');


module.exports = function(env) {
    console.log('NODE_ENV: ', env.NODE_ENV); // 'local'

    const CURRENT_ENV = 'local';
    let NEW_ENV = 'local';
    if (env.NODE_ENV === 'production') {
        NEW_ENV = env.NODE_ENV;
    }
    return {
        node: {
            fs: 'empty'
        },
        entry:  path.join(__dirname, "./", "configLoader.js"),
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.js"
        },
        module: {
            loaders: [
                {
                    test: path.join(__dirname, "src"),
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        },
        plugins: [
            new webpack.NormalModuleReplacementPlugin(/config\/local\/config\.json/, function(resource) {
                resource.request = resource.request.replace(/config\/local\/config\.json/, `/config\/${NEW_ENV}\/config\.json`);
            })
        ]
    }
};