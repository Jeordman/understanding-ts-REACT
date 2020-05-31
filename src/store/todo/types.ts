//State
export interface StoreState {
    practice: boolean;
    messages: Message[];
}

//Objects
export interface Message {
    user: string;
    message: string;
}

//Action types
export const PRACTICE_CASE = "PRACTICE";
export const ADD_MESSAGE = "ADD_MESSAGE";

//Actions
interface PracticeAction {
	type: typeof PRACTICE_CASE;
	payload: boolean;
}

interface AddMessageAction {
    type: typeof ADD_MESSAGE
    payload: Message
}

//Action Creators
export interface Practice {
	(): {
		type: String;
		payload: Boolean;
	};
}

export interface AddMessage {
    (message: Message): {
        type: String;
        payload: Message;
    }
}

export type TodoActionTypes = PracticeAction | AddMessageAction;
