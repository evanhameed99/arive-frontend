import { triggerReducer, ACTION_TYPES } from '../constants/actiontypes';

import { axiosDelete, axiosGet, axiosPost } from './axios'



export const getUserHobbies = (userId: string | null) => (dispatch: any) => new Promise((resolve, reject) => {
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


export const createUserHobbie = (data: any) => (dispatch: any) => new Promise((resolve, reject) => {
    console.log('data inside action', data)
    axiosPost(`/hobbies/create/${data.userId}`, data)
        .then((res: any) => {
            console.log('the res', res)
            getUserHobbies(data.userId)(dispatch);
            resolve(res.result);
        }
        )
        .catch((err: any) => {
            reject(err);
        }
        )

})

export const deleteUserHobbie = (data: any) => (dispatch: any) => new Promise((resolve, reject) => {
    console.log('data inside deleteee api', data)
    axiosDelete(`/hobbies/delete/${data.userId}`, { hobbieId: data.hobbieId })
        .then((res: any) => {
            console.log('the res', res)
            getUserHobbies(data.userId)(dispatch);
            resolve(res.result);
        }
        )
        .catch((err: any) => {
            reject(err);
        }
        )
})



export const selectHobbie = (hobbie: string | null) => (dispatch: any) => {
    dispatch(triggerReducer(ACTION_TYPES.SELECT_HOBBIE, { data: hobbie }));
}
