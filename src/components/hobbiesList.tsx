import React from 'react'

interface Props {
    hobbies: any[]
}

const HobbiesList: React.FC<Props> = ({hobbies}) => {
    return (

        <div className='hobbiesList'>
            {
                hobbies.map((hobbie, index) => {
                    return (
                        <ul className='usersUl' key={hobbie.id}>
                            <li>{hobbie.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default HobbiesList