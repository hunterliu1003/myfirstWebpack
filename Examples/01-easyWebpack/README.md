# 01-easyWebpack

先下載整個範例庫：

```bash
git clone https://github.com/hunterliu1003/myfirstWebpack.git
```

首先請全域安裝 webpack:

```bash
npm install webpack -g
```

請切換到目錄: ~/myfirstWebpack/Examples/01-easyWebpack 底下

```bash
cd myfirstWebpack/Examples/01-easyWebpack
```

將 entry.js 編譯成 bundle.js:

```bash
webpack entry.js bundle.js
```

監聽 entry.js 有更動時自動編譯成 bundle.js:

```bash
webpack entry.js bundle.js --watch
```
