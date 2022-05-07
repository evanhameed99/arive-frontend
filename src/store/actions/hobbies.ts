import { triggerReducer, ACTION_TYPES } from '../constants/actiontypes';

import { axiosGet, axiosPost } from './axios'



export const getUserHobbies = (userId : string | null) => (dispatch: any) => new Promise((resolve, reject) => {
    console.log('comming to the function')
    axiosGet(`/hobbies/${userId}`)
        .then((res: any) => {
            console.log('the res OF HOBBIES', res)
            dispatch(triggerReducer(ACTION_TYPES.GET_USER_HOBBIES, { data: res.hobbies }));
        })
        .catch((err: any) => {
            reject(err);
        }
        )
    // dispatch(triggerReducer(ACTION_TYPES.GET_ALL_USERS));
})


// export const createUserAction = (data: any) => (dispatch: any) => new Promise((resolve, reject) => {
//     console.log('data inside action', data)
//     axiosPost('/users/create', data)
//         .then((res: any) => {
//             console.log('the res', res)
//             getAllUsers()(dispatch);
//             resolve(res.result);
//         }
//         )
//         .catch((err: any) => {
//             reject(err);
//         }
//         )

// })



export const selectHobbie = (hobbie : string | null) => (dispatch: any) => {
    dispatch(triggerReducer(ACTION_TYPES.SELECT_HOBBIE, { data : hobbie }));
}
