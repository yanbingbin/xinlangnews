# news

> a singlePage application

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

项目中遇到的问题: 跨域问题,调用数据接口时,由于浏览器的同源策略,存在跨域问题,
   由于服务端我不能访问到,所以不能采用cores(跨域资源共享):在服务器端添加Header头信息,指定允许访问的源
   header("Access-Control-Allow-Origin: http://需要跨域的网址");header("Access-Control-Allow-Credentials: true");
   axios也不支持jsonp跨域,所以我使用了代理服务器(Proxy Server),它是一个网络中转站,可以将你的域名映射成你需要访问的域名,
   这样一来,跨域问题就解决了,怎么使用代理服务器呢,在webpack中,找到config文件夹下的index.js,找到dev:{}对象,对象里面有
   proxyTable:{} 对象,
   proxyTable: {
   '/api':{
     target:"http://47.93.166.112/BrainPcWeb",//设置你调用的接口域名和端口号 别忘了加http
     changeOrigin:true,
     pathRewrite:{
       '^/api':''//这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替 
            //比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login'即可
     }
   }  
   这样我们就可以开心的跨域请求数据了





