import React from 'react'
import { connect } from 'react-redux'
import '../styles/main/mainTable.css'
import { selectHobbie ,deleteUserHobbie} from '../store/actions/hobbies'
import classNames from 'classnames'
import { ShowNotification } from '../utils/popover'

interface IDeleteHobbie {
    hobbieId: string
    userId: string | null
}
interface Props {
    hobbies: any[]
    selectHobbie: (id: string) => void,
    selectedHobbie: string | null,
    selectedUser: string | null,
    deleteUserHobbie: (data: IDeleteHobbie) => any
}

const HobbiesList: React.FC<Props> = ({ hobbies, selectHobbie, selectedHobbie, selectedUser, deleteUserHobbie }) => {

    const onHobbieClick = (id: string) => {
        selectHobbie(id)
    }
    const onRemoveHobbie = (id: string) => {
        selectHobbie(id);
        if (selectedUser) {
            deleteUserHobbie({ hobbieId: id, userId: selectedUser }).then(() => {
                ShowNotification('Successfull', 'Hobbie deleted successfully', 'success', 2000)
            }).catch(() => {
                ShowNotification('Something went wrong', 'Hobbie deletion failed', 'danger', 2000)
            })
        }

    }
    return (

        <div className='hobbiesList'>
            {
                hobbies && hobbies.length > 0 ? hobbies.map((hobbie, index) => {
                    return (

                        <div key={hobbie._id} className={classNames('hobbie', { 'liClicked': selectedHobbie == hobbie._id })} onClick={() => onHobbieClick(hobbie._id)} >
                            <p className='item'>{hobbie.name}</p>
                            <p className='item'>{hobbie.passionLevel}</p>
                            <p className='item'>{hobbie.year}</p>
                            <button className='removeBtn' onClick={() => onRemoveHobbie(hobbie._id)}>X</button>
                        </div>

                    )
                }) : <div className='noHobbies'><p>No hobbies :(</p></div>
            }

        </div>
    )
}

const mapStateToProps = (store: any) => ({
    selectedHobbie: store.hobbies.selectedHobbie,
    selectedUser: store.users.selectedUser
});

const mapDispatchToProps = {
    selectHobbie: selectHobbie,
    deleteUserHobbie: deleteUserHobbie

};


export default connect(mapStateToProps, mapDispatchToProps)(HobbiesList);