import classNames from 'classnames'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../styles/main/mainTable.css'
import { selectUser } from '../store/actions/users'
interface Props {
    users: any[]
    selectedUser: string | null
    selectUser: (id: string) => void
}

const UserList: React.FC<Props> = ({ users, selectedUser , selectUser }) => {
    console.log('selectedUser', selectedUser)


    const onItemClick = (id: string) => {
        selectUser(id)
    }
    return (
        <div className='usersList'>
            {
                users.map((user, index) => {
                    return (
                        <ul className='usersUl'  >
                            <li className={classNames('', { 'liClicked': selectedUser == user._id })} onClick={() => onItemClick(user._id)} key={user._id} >{user.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (store: any) => ({
    selectedUser: store.users.selectedUser,
});

const mapDispatchToProps = {
    selectUser: selectUser
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);