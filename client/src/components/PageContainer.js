import React from 'react'
import { Navbar, Sidebar } from '.'
import InboxesContainer from './InboxesContainer'
import ChatsContainer from './ChatsContainer'

const PageContainer = () => {
  return (
    <>
      <div className='homepage-container'>
        <Navbar />
        <Sidebar />
        <div className='inbox-container'>
          <InboxesContainer />
          <ChatsContainer />
          
        </div>
      </div>
    </>
  )
}

export default PageContainer