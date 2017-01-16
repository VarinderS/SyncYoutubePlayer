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

// bootstrap
services.socket.connect();