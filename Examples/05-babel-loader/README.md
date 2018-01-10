# 05-babel-loader

先下載整個範例庫：

```bash
git clone https://github.com/hunterliu1003/myfirstWebpack.git
```

首先請全域安裝 webpack：

```bash
npm install webpack -g
```

你可以下載本範例後直接執行：

```bash
npm install
```

因為已包含在 package.json 中了。

或是：

```bash
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env --save-dev
```

請切換到目錄: ~/myfirstWebpack/Examples/02-easyWebpackConfig 底下

```bash
cd myfirstWebpack/Examples/05-babel-loader
```

執行：

```bash
webpack
```

若沒設定參數，預設會讀取 webpack.config.js 檔。