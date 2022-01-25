# 一个 express 示例

## 解析 Request

* IncomingMessage 是对 http 请求的封装
* Request 是对 IncomingMessage 的封装

```javascript
const {method, httpVersion, path, hostname, query, body} = request
console.log('method:', method)
console.log('httpVersion:', httpVersion)
console.log('path:', path)
console.log('hostname:', hostname)
console.log('query:', query)
console.log('body:', body)
response.end('welcome to my express server')
```


## 命令测试

安装 express 及其依赖
```bash
yarn
```
启动服务
```bash
node server.js
```
测试
```bash
curl  -X POST -H "Content-Type:application/x-www-form-urlencoded" -d "age=33"  "http://localhost:8080/user?name=laoyang"
```
服务器控制返回
```text
method: POST
httpVersion: 1.1
path: /user
hostname: localhost
query: { name: 'laoyang' }
body: { age: '33' }
```

