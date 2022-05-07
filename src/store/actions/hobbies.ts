
import { ICreateHobbie } from '../../Interfaces/hobbie';
import { triggerReducer, ACTION_TYPES } from '../constants/actiontypes';

import { axiosDelete, axiosGet, axiosPost } from './axios'



export const getUserHobbies = (userId: string | null) => (dispatch: any) => new Promise((resolve, reject) => {
    axiosGet(`/hobbies/${userId}`)
        .then((res: any) => {
            dispatch(triggerReducer(ACTION_TYPES.GET_USER_HOBBIES, { data: res.hobbies }));
        })
        .catch((err: any) => {
            reject(err);
        }
        )
    // dispatch(triggerReducer(ACTION_TYPES.GET_ALL_USERS));
})


export const createUserHobbie = (data: ICreateHobbie) => (dispatch : any) => new Promise((resolve, reject) => {
    axiosPost(`/hobbies/create/${data.userId}`, data)
        .then((res: any) => {
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
    axiosDelete(`/hobbies/delete/${data.userId}`, { hobbieId: data.hobbieId })
        .then((res: any) => {
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
