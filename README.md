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
* [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* [babel-loader](https://www.npmjs.com/package/babel-loader)：js預處理器。

#### React
* [react](https://www.npmjs.com/package/react)：js框架。
* [react-dom](https://www.npmjs.com/package/react-dom)：負責把react DOM加入網頁。

#### Style
* [css-loader](https://www.npmjs.com/package/css-loader)：css預處理器。
* [postcss-loader](https://www.npmjs.com/package/postcss-loader)：轉譯css。
* [autoprefixer](https://www.npmjs.com/package/autoprefixer)：postcss套件，將樣式補上跨瀏覽器語法。
* [sass-loader](https://www.npmjs.com/package/sass-loader)：轉譯sass。
* [node-sass](https://www.npmjs.com/package/node-sass)：sass api。
* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)：webpack4才能用，將樣式抽離獨立。

#### ESLint
* [eslint](https://www.npmjs.com/package/eslint)：(>=6.14), npm version 3+，js檢查工具。
* [eslint-loader](https://www.npmjs.com/package/eslint-loader)：eslint預處理器。
* [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel)：babel檢查工具。
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)：react檢查工具。