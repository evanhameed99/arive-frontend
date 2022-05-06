import {triggerReducer , ACTION_TYPES} from '../constants/actiontypes';


export const getAllUsers = () => (dispatch : any) => {
    dispatch(triggerReducer(ACTION_TYPES.GET_ALL_USERS));
  };

  