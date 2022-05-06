import { ACTION_TYPES } from "../constants/actiontypes";

const defaultState = {
    users: [
        { name: 'evan', age: 30 },
    ],
    selectedUser: null,
};

export const users = (state = defaultState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case ACTION_TYPES.GET_ALL_USERS:
            return state.users;
        default:
            return state;
    }
}
