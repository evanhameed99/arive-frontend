import React from 'react'
import '../styles/main/mainTable.css';
import HobbiesList from './hobbiesList';

const hobbies = [
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
    {
        id: 1,
        name: 'Hiking',
    },
]

const Hobbies = () => {
    return (
        <div className='mainHobbies'>
            <form className='form'>
                <input className='userInput' placeholder='Hobbie name'></input>
                <select className='userInput'>
                    <option value="" disabled selected>Passion Level</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
                <input type='number' className='userInput' placeholder='Year'></input>
                <button className='addBtn'>Add</button>
            </form>
            <HobbiesList hobbies={hobbies} />
        </div>
    )
}

export default Hobbies