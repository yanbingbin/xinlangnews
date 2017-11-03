'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')
const http = require('http')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()

// let apiRouters = express.Router()
// apiRouters.get('./channel',function (req,res) {
//   let channel = ''
//   let url = encodeURI('http://api.jisuapi.com/news/channel?appkey=1353b251727262fb')
//   let getChannel = new Promise((resolve,reject) => {
//     http.get((url,response) => {
//       response.on('data',data => {
//         channel += data
//       })
//       response.on('end',() => {
//         resolve(channel)
//       })
//     })
//   })
//   getChannel.then(channel => {
//     channel = JSON.parse(channel)
//     res.json(channel)
//   })
// })
//
// apiRouters.get('/channel/:item',function (req,res) {
//   let item = req.params.item
//   function findChannel(item) {
//     return new Promise((resolve,reject) => {
//       let findResult = ''
//       let url = encodeURI('http://api.jisuapi.com/news/get?channel='+item+'&start=0&num=50&appkey=1353b251727262fb')
//       http.get(url,response => {
//         response.on('data',data => {
//           findResult += data
//         })
//         response.on('end',() => {
//           resolve(findResult)
//         })
//       })
//     })
//   }
//   findChannel(item).then(findResult => {
//     res.json(JSON.parse(findResult))
//   })
// })
//
// apiRouters.get('/search/:keywords',function (req,res) {
//   let keywords = req.pararms.keywords
//   function search(keywords) {
//     return new Promise((resolve,reject) => {
//       let searchResult = ''
//       let url = encodeURI('http://api.jisuapi.com/news/search?keyword='+keywords+'&appkey=1353b251727262fb')
//       http.get(url,response => {
//         response.on('data',data => {
//           searchResult += data
//         })
//         response.on('end',() => {
//           resolve(searchResult)
//         })
//       })
//     })
//   }
//   search(keywords).then(searchResult => {
//     res.json(JSON.parse(searchResult))
//   })
// })
//
// app.use('./api',apiRouters)

const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
