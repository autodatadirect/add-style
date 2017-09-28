var NODE_MODULE_IDENTIFIER = /^~[^/]/

// node-sass importer, replicates sass-loader for webpack;
// when match is found: rewrite the url to "../node_modules/".
// See: https://github.com/sass/node-sass#importer--v200---experimental
// See: https://github.com/webpack-contrib/sass-loader#imports
module.exports = function importer (url) {
  if (NODE_MODULE_IDENTIFIER.exec(url)) url = '../node_modules/' + url.slice(1)
  return {'file': url}
}
