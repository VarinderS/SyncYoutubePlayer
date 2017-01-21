import "./application.scss";
import * as services from "./services";

// playgroud
window.setTimeout(() => {
	services.server.emitAction$("login", { username: "foo" })
		.subscribe(result => {
			console.log("logged in", result);
		}, error => {
			console.error(error);
		});
}, 1000);


// auth

// components
require("./components/player/player");
require("./components/users/users");
require("./components/chat/chat");
require("./components/playlist/playlist");

// bootstrap
services.socket.connect();