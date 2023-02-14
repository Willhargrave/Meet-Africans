import React from 'react'
import DetailInfo from '../components/main/DetailInfo/DetailInfo'
import ListChats from '../components/main/ListChats/ListChats'
import ListFriends from '../components/main/ListFriends/ListFriends'
import ListUsers from '../components/main/ListUsers/ListUsers'
import NavBarMain from '../components/main/NavBarMain/NavBarMain'
import Profile from '../components/main/Profile/Profile'

const Main = () => {
  return (
    <div className='main'>
      <main className="wrapper">
        <NavBarMain />
        <div className='main-side'>
          <ListFriends />
          <Profile />
        </div>
        <div className='main-mid'>
          <ListUsers />
          <ListChats />
          <DetailInfo />
        </div>
      </main>
    </div>
  )
}

export default Main
