# Create React App
建立 WEbpack4 + React16 的專案環境。

## Build Setup
```
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn build
```

## Packages introduction

#### Webpack
* [webpack](https://www.npmjs.com/package/webpack)：前端資源打包工具。
* [webpack-cli](https://www.npmjs.com/package/webpack-cli)：webpack命令行工具。
* [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)：web服務器。
* [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)：建立網頁，及將靜態資源引入頁面。

#### Babel 
* [@babel/core](https://www.npmjs.com/package/@babel/core)：babel api。
* [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)：轉譯js兼容至指定環境。
* [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)：轉譯react/jsx。
* [@babel/plugin-proposal-class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)
* [babel-loader](https://www.npmjs.com/package/babel-loader)：js預處理器。

#### React
* [react](https://www.npmjs.com/package/react)：js框架。
* [react-dom](https://www.npmjs.com/package/react-dom)：負責把 react DOM 加入網頁。