import React from 'react'
import '../styles/main/mainTable.css'
import UserList from './userList'

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
const Users = () => {
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

export default Users