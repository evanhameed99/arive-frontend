import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import '../styles/main/mainTable.css';
import HobbiesList from './hobbiesList';
import { getUserHobbies, createUserHobbie } from '../store/actions/hobbies';
import { ShowNotification } from '../utils/popover';
import { ICreateHobbie, IHobbie } from '../Interfaces/hobbie';


interface Props {
    hobbies: IHobbie[]
    getUserHobbies: (userId: string) => void,
    createUserHobbie: (data: ICreateHobbie) => any,
    selectedUser: string | null
}

const Hobbies: React.FC<Props> = ({ selectedUser, getUserHobbies, hobbies, createUserHobbie }) => {
    const [name, setName] = useState<string>('');
    const [passionLevel, setPassionLevel] = useState<string>('Passion Level');
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        if (selectedUser) {
            getUserHobbies(selectedUser)
        }
    }, [selectedUser])

    const onAddHobbie = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!selectedUser) {
            ShowNotification('Warning', 'Please select a user', 'warning', 2000)
        }

        if (name && passionLevel !== 'Passion Level' && year && selectedUser) {
            const data = {
                name,
                passionLevel,
                year,
                userId: selectedUser
            }
            createUserHobbie(data).then(() => {
                setName('')
                setPassionLevel('low')
                setYear(0)
                ShowNotification('Successfull', 'Hobbie created successfully', 'success', 2000)
            }).catch(() => {
                ShowNotification('Something went wrong', 'Hobbie creation failed', 'danger', 2000)
             })

        }

    }


    return (
        <div className='mainHobbies'>
            <form className='form' onSubmit={onAddHobbie}>
                <input required value={name} className='formInput' placeholder='Hobbie name' onChange={(e) => setName(e.target.value)}></input>
                <select required className='formInput' onChange={(e) => setPassionLevel(e.target.value)} defaultValue={passionLevel}>
                    <option value="Passion Level" disabled >Passion Level</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
                <input required min={1920} type='number' className='formInput' placeholder='Year' value={year} onChange={(e) => setYear(parseInt(e.target.value))}></input>
                <button className='addBtn' type='submit'>Add</button>
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
    createUserHobbie: createUserHobbie
};


export default connect(mapStateToProps, mapDispatchToProps)(Hobbies);