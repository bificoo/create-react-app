const HtmlWebpackPlugin = require("html-webpack-plugin");
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
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: "babel-loader"
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
    ],
};