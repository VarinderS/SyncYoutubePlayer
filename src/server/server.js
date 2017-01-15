import "source-map-support/register";

import express from "express";
import http from "http";
import socketIo from "socket.io";
import chalk from "chalk";

const isDevelopment = process.env.NODE_ENV !== "production";

// setup
const app = express();
const server = new http.Server(app);
const io = socketIo(server);

// client - webpack
if (process.env.USE_WEBPACK === "true") {
	var webpackMiddleware = require("webpack-dev-middleware"),
		webpackHotMiddleware = require("webpack-hot-middleware"),
		webpack = require("webpack"),
		clientConfig = require("../../webpack.client");
	
	const compiler = webpack(clientConfig);
	app.use(webpackMiddleware(compiler, {
		publicPath: "/build",
		stats: {
			colors: true,
			chunks: false,
			assets: false,
			timings: false,
			modules: false,
			hash: false,
			version: false
		}
	}));

	app.use(webpackHotMiddleware(compiler));

	console.log(chalk.bgRed(`using webpack middleware, this is for dev only`));
}


// configure express
app.set("view engine", "jade");
app.use(express.static("public"));

const useExternalStyles = !isDevelopment;
app.get("/", (request, response) => {
	response.render("index", {
		useExternalStyles: useExternalStyles
	});
});

// modules


// socket
io.on("connection", socket => {
	console.log(`got connection from: ${socket.request.connection.remoteAddress}`);
});

// startup
const port = process.env.PORT || 3000;

function startServer() {
	server.listen(port, () => {
		console.log(`Started http server on ${port}`);
	});
}

startServer();