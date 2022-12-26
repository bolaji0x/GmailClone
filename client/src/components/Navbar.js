import React from 'react'
import { useAppContext } from '../context/appContext'
import {  GmailLogo } from '../components'
import { AiOutlineMenu  } from "react-icons/ai";
const Navbar = () => {
  const { toggleSidebar } = useAppContext()
  return (
      <nav className='navbar-container'>
        <div className='nav-head'>

          <div className='lnh-flex'>
            <button onClick={toggleSidebar}><AiOutlineMenu className='nav-tog-btn' /></button>
            <button className='gmail-btn'><GmailLogo /></button>
            <h3 className='lnh-text'>Gmail</h3>
          </div>

          <input 
            type='search'
            name='search'
            className='nav-search'
            placeholder='Search in mail'

          />
          
          <div className='rnh-flex'>
            <button><i className='rnh-btn bx bx-question-mark'></i></button>
            <button><i className='rnh-btn bx bxs-cog' ></i></button>
            <button><i className='rnh-btn bx bxs-grid' ></i></button>
            <button className='rnh-name'>s</button>
          </div>
          
        </div>
      </nav>
  )
}

export default Navbar