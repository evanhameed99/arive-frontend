


export const ACTION_TYPES = {
    GET_ALL_USERS : 'GET_ALL_USERS',
    SELECT_USER : 'SELECT_USER',
    GET_USER_HOBBIES : 'GET_USER_HOBBIES',
    SELECT_HOBBIE : 'SELECT_HOBBIE',
    CREATE_USER_HOBBIE : 'CREATE_USER_HOBBIE',
}





export const triggerReducer = (type: string, extra = {}) => ({
    type,
    ...extra,
  });
  