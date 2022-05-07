import { triggerReducer, ACTION_TYPES } from '../constants/actiontypes';

import { axiosGet, axiosPost } from './axios'



export const getAllUsers = () => (dispatch: any) => new Promise((resolve, reject) => {

    axiosGet('/users')
        .then((res: any) => {
            dispatch(triggerReducer(ACTION_TYPES.GET_ALL_USERS, { data: res.result }));
        })
        .catch((err: any) => {
            reject(err);
        }
        )
    // dispatch(triggerReducer(ACTION_TYPES.GET_ALL_USERS));
})


export const createUserAction = (data: any) => (dispatch: any) => new Promise((resolve, reject) => {
    axiosPost('/users/create', data)
        .then((res: any) => {
            getAllUsers()(dispatch);
            resolve(res.result);
        }
        )
        .catch((err: any) => {
            reject(err);
        }
        )

})



export const selectUser = (user : string | null) => (dispatch: any) => {
    dispatch(triggerReducer(ACTION_TYPES.SELECT_USER, { data : user }));
}
