import { IHobbie } from "./hobbie";

export interface IUser {
    name: string,
    createdAt: string,
    hobbies: IHobbie[],
    id: string
} 

export interface ICreateUser {
    name: string
}