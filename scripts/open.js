var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");

var compiler = webpack({
    output: { path: '/' }
});

app.use(webpackDevMiddleware(compiler, {
}));
