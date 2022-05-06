import React, { useEffect, useState } from 'react'
import '../styles/main/mainTable.css'
import UserList from './userList'
import { connect } from 'react-redux';
import { getAllUsers, createUserAction } from '../store/actions/users';

interface Props {
    users: any[]
    getAllUsers: () => void,
    createUserAction: (data: { name: string }) => any,
}

const Users: React.FC<Props> = ({ users, getAllUsers, createUserAction }) => {

    const [input, setInput] = useState<string>('');
    console.log('users in comp', users)
    useEffect(() => {
        getAllUsers();
    }, [])


    const onInoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const createUser = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('cliecked')
        e.preventDefault();
        if (input !== '') {
            createUserAction({ name: input }).then(() => {
                console.log('inside then ')
                setInput('')
            })
        }
    }

    return (
        <div className='mainUsers'>
            <form className='form' onSubmit={createUser}>
                <input value={input} onChange={onInoutChange} className='userInput' placeholder='Create User'></input>
                <button type='submit' className='addBtn'>Add</button>
            </form>
            <UserList users={users} />
        </div>
    )
}

const mapStateToProps = (store: any) => ({
    users: store.users.users,
});

const mapDispatchToProps = {
    getAllUsers: getAllUsers,
    createUserAction: createUserAction
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);