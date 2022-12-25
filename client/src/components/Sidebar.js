import React from 'react'
import { useAppContext } from '../context/appContext'

const Sidebar = () => {
    const { toggleSidebar, showSidebar, user } = useAppContext()

  return (
    <aside className='aside-container'>
        <div className={!showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
            <h3 className='sidebar-title'>Gmail</h3>
            <div className='comp-cont'>
                <button className='ecbtn'><i class='comp-btn bx bx-pencil'></i></button>
                <h3 className='ecb-name'>Compose</h3>
            </div>
            
            <ul className='aside-content'>
                <li>
                <div className='inbox-bar inbox-bar-active'>
                    <button className='each-nmbtn'><i className='nav-btn bx bxs-inbox'></i></button>
                    <div className='inbox-flex'>
                        <p className='each-name'>Inbox</p>
                        <span className='each-no'>3</span>
                    </div>
                </div>
                </li>
                <li>
                <div className='each-bar'>
                    <button className='each-nmbtn'><i className='nav-btn bx bx-star' ></i></button>
                    <p className='each-name'>Starred</p>
                </div>
                </li>
                <li>
                <div className='each-bar'>
                    <button className='each-nmbtn'><i className='nav-btn bx bx-time-five' ></i></button>
                    <p className='each-name'>Snoozed</p>
                </div>
                </li>
                <li>
                <div className='each-bar'>
                    <button className='each-nmbtn'><i className='nav-btn bx bxl-telegram' ></i></button>
                    <p className='each-name'>Sent</p>
                </div>
                </li>
                <li>
                <div className='each-bar'>
                    <button className='each-nmbtn'><i className='nav-btn bx bx-file-blank' ></i></button>
                    <p className='each-name'>Drafts</p>
                </div>
                </li>
                <li>
                <div className='each-bar'>
                    <button className='each-nmbtn'><i className='nav-btn bx bxs-chevron-down' ></i></button>
                    <p className='each-name'>More</p>
                </div>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar