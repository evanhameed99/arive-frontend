export interface ICreateHobbie {
    name: string,
    passionLevel: string,
    year: number
    userId: string
}

export interface IHobbie {
    _id: string,
    name: string,
    passionLevel: string,
    year: number,
    createdAt: string,
}
export interface IDeleteHobbie {
    hobbieId: string
    userId: string | null
}