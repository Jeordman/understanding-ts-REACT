import {
	Practice,
	PRACTICE_CASE,
	AddMessage,
	Message,
	ADD_MESSAGE,
} from "./types";

export const practice: Practice = () => {
	return {
		type: PRACTICE_CASE,
		payload: false,
	};
};

export const addMessage: AddMessage = (message: Message) => {
	return {
		type: ADD_MESSAGE,
		payload: message,
	};
};
