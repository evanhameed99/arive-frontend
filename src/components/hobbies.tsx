import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import '../styles/main/mainTable.css';
import HobbiesList from './hobbiesList';
import { getUserHobbies } from '../store/actions/hobbies';

interface Props {
    hobbies: any[]
    getUserHobbies: (userId: string) => void,
    selectedUser: string | null
}

const Hobbies : React.FC<Props> = ({selectedUser , getUserHobbies , hobbies}) => {
    console.log('the honb' , hobbies)
    useEffect(() => {
        if (selectedUser) {
            getUserHobbies(selectedUser)
        }

        
    }, [selectedUser])
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


const mapStateToProps = (store: any) => ({
    hobbies: store.hobbies.hobbies,
    selectedUser: store.users.selectedUser
});

const mapDispatchToProps = {
    getUserHobbies: getUserHobbies,
};


export default connect(mapStateToProps, mapDispatchToProps)(Hobbies);