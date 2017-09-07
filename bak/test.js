const sourceMap = require('source-map')
const path = require('path')
const fs = require('fs-extra')
const map = fs.readJSONSync(path.join(__dirname, './hello-js-without-babel-loader.map'))
var rawSourceMap = map

var smc = new sourceMap.SourceMapConsumer(rawSourceMap)

// line:194 ==> source code: const abc = 'hello';
// result:{ source: 'webpack:///hello.vue',                                                                                               o.vue 535 bytes {0} [built]
//   line: 14,
//   column: 0,
//   name: null }
console.log(smc.originalPositionFor({
    line: 194,
    column: 0
}))