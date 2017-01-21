/*eslint no-unused-vars: "off"*/

import { Observable } from "rxjs";

export class ModuleBase {
	init$() {
		return Observable.empty();
	}

	registerClient(client) {  }

	clientRegistered(client) {  }
}