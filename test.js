const sourceMap = require('source-map')
const fs = require('fs-extra')
const map = fs.readJSONSync('./build/hello-with-babel-loader.js.map')
var rawSourceMap = map

var smc = new sourceMap.SourceMapConsumer(rawSourceMap)

// line:141 ==> source code: const abc = 'hello';
console.log(smc.originalPositionFor({
    line: 137,
    column: 0
}))