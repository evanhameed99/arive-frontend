


export const ACTION_TYPES = {
    GET_ALL_USERS : 'GET_ALL_USERS',
}





export const triggerReducer = (type: string, extra = {}) => ({
    type,
    ...extra,
  });
  