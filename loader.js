var transform = require('./index.js');
var loaderUtils = require('loader-utils');
module.exports = function(cjsx) {
  this.cacheable && this.cacheable();
  return transform(cjsx, loaderUtils.parseQuery(this.query));
};
