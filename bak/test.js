const sourceMap = require('source-map')
const path = require('path')
const fs = require('fs-extra')
const map = fs.readJSONSync(path.join(__dirname, './hello-js-without-babel-loader.map'))
var rawSourceMap = map

var smc = new sourceMap.SourceMapConsumer(rawSourceMap)


console.log(smc.originalPositionFor({
    line: 194,
    column: 0
}))