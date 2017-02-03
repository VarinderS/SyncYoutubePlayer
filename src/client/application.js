import $ from "jquery";
import "moment-duration-format";
import "shared/operators";
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
const $html = $("html");
services.usersStore.currentUser$.subscribe(user => {
	if (user.isLoggedIn) {
		$html.removeClass("not-logged-in");
		$html.addClass("logged-in");
	} else {
		$html.addClass("not-logged-in");
		$html.removeClass("logged-in");
	}
});

// components
require("./components/player/player");
require("./components/users/users");
require("./components/chat/chat");
require("./components/playlist/playlist");

// bootstrap
services.socket.connect();