var q = require('q');
var fs = require('fs');
var base64 = require('base-64');
var encode = require('nodejs-base64-encode');

var Helper = function () {
    /**
    *This method encode the chrome extension file '.crx' to base64 and returns
    **/
    this.encodeToBase64 = function (file) {
        var stream = require('fs').readFileSync(file);
        return new Buffer(stream).toString('base64');
    }
};

module.exports = new Helper()