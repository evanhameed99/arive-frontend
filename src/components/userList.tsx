import classNames from 'classnames'
import React, { useState } from 'react'
import '../styles/main/mainTable.css'
interface Props {
    users: any[]
}

const UserList: React.FC<Props> = ({ users }) => {

    const [id, selectedId] = useState('')

    const onItemClick  = (id : string) => {
        console.log('clicked' , id)
        selectedId(id)
    }
    return (
        <div className='usersList'>
            {
                users.map((user, index) => {
                    return (
                        <ul className='usersUl'  >
                            <li className={classNames('' , { 'liClicked' : id == user._id})} onClick={()=> onItemClick(user._id)} key={user._id} >{user.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default UserList