import { ACTION_TYPES } from "../constants/actiontypes";

const defaultState = {
    users: [
    ],
    selectedUser: null,
    loader: true
};

export const users = (state = defaultState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case ACTION_TYPES.GET_ALL_USERS:
            return { ...state, users: data , loader: false};
        case ACTION_TYPES.SELECT_USER:
            return { ...state, selectedUser: data };
        default:
            return state;
    }
}

