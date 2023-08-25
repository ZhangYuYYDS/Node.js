# Node.js

## 初始化文件夹

```js
npm init
```

## 使用 nodemon 工具

同一文件不需要每次都执行文件， 使用 nodemon 只需要执行一遍即可，修改文件内容时会自动更新

### 安装 nodemon

```js
npm nodemon -g
```

### 执行 nodemon

```js
npx nodemon xxx.js
```

## git commit 提交规范

使用 commitizen 来规范我们 git commit 的信息

### 全局安装

```js
npm install commitizen -g
```

### 安装并初始化 cz-conventional-changelog

```js
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

### 配置 package.json 文件夹

```json
"config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

### 执行 npx cz
