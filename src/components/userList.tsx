import React from 'react'

interface Props {
    users: any[]
}

const UserList: React.FC<Props> = ({ users }) => {
    console.log('usersss' , users)
    return (
        <div className='usersList'>
            {
                users.map((user, index) => {
                    return (
                        <ul className='usersUl' key={user._id}>
                            <li>{user.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default UserList