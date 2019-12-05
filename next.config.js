const path = require('path')
const dotenv = require('dotenv')

const { parsed: localEnv } = dotenv.config({ path: path.resolve(__dirname, `./config/env/${process.env.NODE_ENV}.env`)});

const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        return config;
    }
}));

