import React from 'react'
import '../styles/main/mainTable.css'
import Header from './header'
import Hobbies from './hobbies'
import Users from './users'
const Main: React.FC = () => {
  return (
    <div className='mainTable'>
            <Header />
            <div className='mainSection'>
                <Users />
                <Hobbies />
            </div>
    </div>
  )
}

export default Main