import classNames from 'classnames'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../styles/main/mainTable.css'
import { selectUser } from '../store/actions/users'
import {selectHobbie} from '../store/actions/hobbies'
interface Props {
    users: any[]
    selectedUser: string | null
    selectUser: (id: string | null) => void,
    selectHobbie: (id: string | null) => void,
}

const UserList: React.FC<Props> = ({ users, selectedUser, selectUser , selectHobbie }) => {
    console.log('selectedUser', selectedUser)


    const onItemClick = (id: string) => {
        selectUser(id);
        selectHobbie(null);
    }
    return (
        <div className='usersList'>
            <ul className='usersUl'  >
            {
                users.map((user, index) => {
                    return (
                        <li className={classNames('', { 'liClicked': selectedUser == user._id })} onClick={() => onItemClick(user._id)} key={user._id} >{user.name}</li>
                    )
                })
            }
        </ul>
        </div >
    )
}

const mapStateToProps = (store: any) => ({
    selectedUser: store.users.selectedUser,
});

const mapDispatchToProps = {
    selectUser: selectUser,
    selectHobbie : selectHobbie
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);