import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'
import '../styles/main/mainTable.css'
import { selectUser } from '../store/actions/users'
import { selectHobbie } from '../store/actions/hobbies'
interface Props {
    users: any[]
    selectedUser: string | null
    selectUser: (id: string | null) => void,
    selectHobbie: (id: string | null) => void,
    loader: boolean
}

const UserList: React.FC<Props> = ({ users, selectedUser, selectUser, selectHobbie ,loader}) => {
    
    const onItemClick = (id: string) => {
        selectUser(id);
        selectHobbie(null);
    }
    return (
        <div className='usersList'>
            <ul className='usersUl'  >
                {
                    !loader ? users.map((user, index) => {
                        return (
                            <li className={classNames('', { 'liClicked': selectedUser === user._id })} onClick={() => onItemClick(user._id)} key={user._id} >{user.name}</li>
                        )
                    }) : <div className='loader'></div>
                }
            </ul>
        </div >
    )
}

const mapStateToProps = (store: any) => ({
    selectedUser: store.users.selectedUser,
    loader : store.users.loader
});

const mapDispatchToProps = {
    selectUser: selectUser,
    selectHobbie: selectHobbie
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);