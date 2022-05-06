


export const ACTION_TYPES = {
    GET_ALL_USERS : 'GET_ALL_USERS',
    SELECT_USER : 'SELECT_USER',
}





export const triggerReducer = (type: string, extra = {}) => ({
    type,
    ...extra,
  });
  