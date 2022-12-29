import React from 'react'
import { Navbar, Sidebar } from '.'
import InboxesContainer from './InboxesContainer'
import ChatsContainer from './ChatsContainer'
import SendMessage from './SendMessage'

const PageContainer = () => {
  return (
    <>
      <div className='homepage-container'>
        <Navbar />
        <Sidebar />
        <div className='inbox-container'>
          <InboxesContainer />
          <ChatsContainer />
          <SendMessage />
        </div>
      </div>
    </>
  )
}

export default PageContainer