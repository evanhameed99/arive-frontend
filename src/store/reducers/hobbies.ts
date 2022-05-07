import { ACTION_TYPES } from "../constants/actiontypes";

const defaultState = {
    hobbies: [],
    selectedHobbie: null,
};

export const hobbies = (state = defaultState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case ACTION_TYPES.GET_USER_HOBBIES:
            return { ...state, hobbies: data};
        case ACTION_TYPES.SELECT_HOBBIE:
            return { ...state, selectedHobbie: data };
        default:
            return state;
    }
}
