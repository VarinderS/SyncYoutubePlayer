import { Validator } from "../validator";

export const USERNAME_REGEX = /^[\w\d-_]+/;

export function validateLogin(username) {
	const validator = new Validator();

	if (username.length >= 20) {
		validator.error("Username cannot be more than 20 characters");
	}

	if (!USERNAME_REGEX.test(username)) {
		validator.error("Username can only contain underscores, dashes and digits");
	}

	return validator;
}