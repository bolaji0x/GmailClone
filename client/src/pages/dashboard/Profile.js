import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <div className='inbox-content'>
        <ul className='ei-head-flex'>
          <li className='ei-flex eif-active'>
              <button><i className='ei-btn bx bxs-inbox'></i></button>
              <h3 className='ei-name ei-hover'>Primary</h3>
          </li>
          <li className='ei-flex'>
              <button><i class='ei-btn bx bx-purchase-tag-alt'></i></button>
              <h3 className='ei-name ei-hover'>Promotions</h3>
          </li>
          <li className='ei-flex'>
              <button><i class='ei-btn bx bx-group' ></i></button>
              <h3 className='ei-name ei-hover'>Social</h3>
          </li>
        </ul>

        <div className='inbox-modal'>
          <div className='inb-flex'>
            <h2 className='inb-name'>Get started with Gmail</h2>
            <button className='inb-btn'><FaTimes /></button>
          </div>
          <div className='gs-content'>
            <div className='gs-flex'>
              <button className='each-gsbtn set-btn'><i class='gs-btn set-btn bx bx-cog' ></i></button>
              <p className='ei-name'>Customize your <br></br>inbox</p>
            </div>
            <div className='gs-flex'>
              <button className='each-gsbtn user-btn'><i class='gs-btn bx bx-user-circle' ></i></button>
              <p className='ei-name'>Change profile <br></br>image</p>
            </div>
            <div className='gs-flex'>
              <button className='each-gsbtn add-btn'><i class='gs-btn bx bxs-user-plus'></i></button>
              <p className='ei-name'>Import Contacts<br></br>an mail</p>
            </div>
            <div className='gs-flex'>
              <button className='each-gsbtn phone-btn'><i class='gs-btn bx bx-mobile-alt' ></i></button>
              <p className='ei-name'>Get Gmail <br></br>for mobile</p>
            </div>
          </div>
        </div>
      </div>



      <div className='chats-container'>
                <div className='rsc-letter'>C</div>
                <div className='rsc-flex rsc-btns'>
                    <input
                        type='checkbox'
                        className='rsc-check'
                    />
                    <button><i className='rsc-star bx bx-star' ></i></button>
                    <p className='rsc-name'>Suleiman, </p>
                    <p className='rsc-name'>me</p>
                    <p className='rsc-name'>2</p>
                </div>
                <div className='rsm-flex rsc-msg'>
                    <span className='rsc-name re'>Re: -</span>
                    <p className='rsc-name jj'>What whave youbeing doin whave youbeing doin whave youbeing doin whave youbeing doin</p>
                </div>
                <div>
                    <p className='rsc-name'>11:28 pm</p>
                </div>

                <Link to='/add' className='chats-btm'>
                    <button type='button' className=''><i class='cb-btn bx bx-pencil'></i></button>
                    <button type='button' className='cb-name'>Compose</button>
                </Link>
                
        </div>

    </>
  )
}

export default Profile