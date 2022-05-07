export interface IHobbie {
    name: string,
    passionLevel: string,
    year: number
    userId: string
}

export interface IDeleteHobbie {
    hobbieId: string
    userId: string | null
}