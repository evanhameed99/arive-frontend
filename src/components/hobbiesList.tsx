import React from 'react'
import { connect } from 'react-redux'
import '../styles/main/mainTable.css'
import { selectHobbie } from '../store/actions/hobbies'
import classNames from 'classnames'
interface Props {
    hobbies: any[]
    selectHobbie: (id: string) => void,
    selectedHobbie: string | null
}

const HobbiesList: React.FC<Props> = ({ hobbies, selectHobbie, selectedHobbie }) => {

    const onHobbieClick = (id: string) => {
        console.log('new one onHobbieClick ')
        selectHobbie(id)
    }
    return (

        <div className='hobbiesList'>
                {
                    hobbies && hobbies.length > 0 ? hobbies.map((hobbie, index) => {
                        return (

                            <div key={hobbie._id} className={classNames('hobbie', { 'liClicked': selectedHobbie == hobbie._id })} onClick={()=> onHobbieClick(hobbie._id)} >
                                <p className='item'>{hobbie.name}</p>
                                <p className='item'>{hobbie.passionLevel}</p>
                                <p className='item'>{hobbie.year}</p>
                                <button className='removeBtn'>X</button>
                            </div>

                        )
                    }) : <div className='noHobbies'><p>No hobbies :(</p></div>
                }

        </div>
    )
}

const mapStateToProps = (store: any) => ({
    selectedHobbie: store.hobbies.selectedHobbie,
});

const mapDispatchToProps = {
    selectHobbie: selectHobbie
};


export default connect(mapStateToProps, mapDispatchToProps)(HobbiesList);