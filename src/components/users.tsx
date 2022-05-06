import React, { useEffect } from 'react'
import '../styles/main/mainTable.css'
import UserList from './userList'
import { connect } from 'react-redux';
import { getAllUsers } from '../store/actions/users';

interface Props {
    users: any[]
    getAllUsers: () => void
}

const users = [
    {
        name: 'John',
        _id: 30,
    },
    {
        name: 'Jane',
        _id: 25,
    },
    {
        name: 'Jill',
        _id: 323,
    },
    {
        name: 'Jack',
        _id: 40,
    },
    {
        name: 'Jack',
        _id: 312312,
    },
    {
        name: 'Jack',
        _id: 43213120,
    },
    {
        name: 'Jack',
        _id: 412320,
    },
    {
        name: 'Jill',
        _id: 35,
    },
    {
        name: 'Jill',
        _id: 35,
    },
    {
        name: 'Jill',
        _id: 35,
    },
    {
        name: 'Jill',
        _id: 35,
    },
    {
        name: 'Jill',
        _id: 35,
    },
    {
        name: 'Jill',
        _id: 35,
    },

]
const Users: React.FC<Props> = ({ users , getAllUsers }) => {

    useEffect(() => {
        console.log('hello')
        getAllUsers();
    }, [])

    console.log('usersssssss', users)
    return (
        <div className='mainUsers'>
            <form className='form'>
                <input className='userInput' placeholder='Create User'></input>
                <button className='addBtn'>Add</button>
            </form>
            <UserList  users= {users}/>
        </div>
    )
}

const mapStateToProps = (store: any) => ({
    users: store.users,
});

const mapDispatchToProps = {
    getAllUsers: getAllUsers
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);