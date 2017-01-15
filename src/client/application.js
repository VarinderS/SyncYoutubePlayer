import "./application.scss";
import * as services from "./services";

// playgroud
services.server.on$("test")
	.map(d => d + " transformed")
	.subscribe(item => {
		console.log(`Got ${item} from server`);
	});

services.server.status$.subscribe(state => console.log(state));

// auth

// components

// bootstrap
services.socket.connect();