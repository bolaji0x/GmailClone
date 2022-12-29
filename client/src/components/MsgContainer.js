import React from 'react'
import { Navbar, Sidebar, Messages } from '../components'
const MsgContainer = () => {
  return (
    <div className='homepage-container'>
        <Navbar />
        <Sidebar />
        <Messages />
    </div>
  )
}

export default MsgContainer