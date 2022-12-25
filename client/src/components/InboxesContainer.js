import React from 'react'

const InboxesContainer = () => {
  return (
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
            <button className='inb-btn'>X</button>
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
  )
}

export default InboxesContainer