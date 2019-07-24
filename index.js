const lineReader = require('line-reader');
const Robot= require('./Robot');

var _robot= new Robot();

lineReader.eachLine('files/testFile.txt', {separator: ';', encoding: 'utf8'}, function(line, last, cb) {
    console.log(line.startsWith('PLACE'));
});