# news

> a singlePage application

## 使用步骤

``` bash
# 下载
git clone 

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

# 技术栈

- vue2：基础框架
- vue-router2：路由跳转
- vuex：全局数据管理
- es6: 采用部分es6特性，大大简化了写法
- webpack：vue-cli基于webpack，修改了部分配置
- axios：基于Promise的http库，用来请求数据
- flex：弹性布局，在移动端兼容性较好，写各种布局非常方便
- flexible.js： 移动端适配方案


# 项目中遇到的问题:
- 跨域问题,调用数据接口时,由于浏览器的同源策略,存在跨域问题,由于服务端我不能访问到,所以不能采用cores(跨域资源共享), axios也不支持jsonp跨域,所以我使用了代理服务器(Proxy Server),它是一个网络中转站,可以将你的域名映射成你需要访问的域名,
   这样一来,跨域问题就解决了,这样我们就可以开心的跨域请求数据了。
   又遇到了一个新问题，使用路由点击返回时，页面总是自动重新渲染，经过查阅，发现使用keep-alive标签包裹住router-view,<keep-alive>
    <router-view></router-view></keep-alive>,这样可以持久化数据连接，就不会触发重新渲染了





