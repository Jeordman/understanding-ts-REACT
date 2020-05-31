import {
	TodoActionTypes,
	StoreState,
	PRACTICE_CASE,
    ADD_MESSAGE,
} from "./types";

const initialState: StoreState = {
    practice: true,
    messages: [],
};

export default function(state = initialState, action: TodoActionTypes) {
	const { type, payload } = action;
	switch (type) {
		case PRACTICE_CASE:
			return {
                ...state,
				practice: payload,
            };
		case ADD_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, payload]
            }
		default:
			return state;
	}
}
