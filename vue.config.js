module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  lintOnSave: process.env.NODE_ENV !== 'production'
};