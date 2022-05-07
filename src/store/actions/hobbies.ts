
import { ICreateHobbie } from '../../Interfaces/hobbie';
import { triggerReducer, ACTION_TYPES } from '../constants/actiontypes';
import { Dispatch } from 'redux'
import { axiosDelete, axiosGet, axiosPost } from './axios'



export const getUserHobbies = (userId: string | null) => (dispatch: Dispatch) => new Promise((resolve, reject) => {
    axiosGet(`/hobbies/${userId}`)
        .then((res: any) => {
            dispatch(triggerReducer(ACTION_TYPES.GET_USER_HOBBIES, { data: res.hobbies }));
        })
        .catch((err: any) => {
            reject(err);
        }
        )
})


export const createUserHobbie = (data: ICreateHobbie) => (dispatch: Dispatch) => new Promise((resolve, reject) => {
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

export const deleteUserHobbie = (data: any) => (dispatch: Dispatch) => new Promise((resolve, reject) => {
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



export const selectHobbie = (hobbie: string | null) => (dispatch: Dispatch) => {
    dispatch(triggerReducer(ACTION_TYPES.SELECT_HOBBIE, { data: hobbie }));
}
