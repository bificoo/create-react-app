const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/")
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'scripts/main.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js|jsx$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "postcss-loader"
                ]
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 8192
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "file-loader",
                options: {
                    limit: 8192,
                    name: "/assets/images/[name].[ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: "file-loader",
                options: {
                    limit: 8192,
                    name: "/assets/fonts/[name].[ext]"
                }
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: [
            "node_modules",
            path.resolve(__dirname, "src/")
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Create React App",
            meta: {
                description: "Use webpack4/react16 create app",
                viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            },
            template: "./index.html",
            hash: true,
            cache: false,
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? "assets/styles/main.css" : "assets/styles/main.[hash].css"
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    performance: {
        hints: false
    },
    devtool: devMode ? "cheap-module-source-map" : "nosources-source-map",
};