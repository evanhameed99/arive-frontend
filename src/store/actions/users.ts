import { triggerReducer, ACTION_TYPES } from '../constants/actiontypes';

import { axiosGet } from './axios'



export const getAllUsers = () => (dispatch: any) => new Promise((resolve, reject) => {
    console.log('comming to the function')
    axiosGet('/users')
        .then((res: any) => {
            console.log('the res', res)
            dispatch(triggerReducer(ACTION_TYPES.GET_ALL_USERS, { data: res.result }));
        })
        .catch((err: any) => {
            reject(err);
        }
        )
    // dispatch(triggerReducer(ACTION_TYPES.GET_ALL_USERS));
})