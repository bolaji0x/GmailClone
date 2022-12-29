import React from 'react'
import { BiArrowBack, BiDotsVerticalRounded, BiPaperclip, BiSend } from "react-icons/bi";
import { Link } from 'react-router-dom'
const CreateMessage = () => {
  return (
    <>
        <div className='sm-modal'>
            <div className='sm-head'>
                        <div className='sml-flex'>
                            <Link to='/test'><BiArrowBack className='sml-btn' /></Link>
                            <h4 className='smh-name'>Compose</h4>
                        </div>
                        <div className='smr-flex'>
                            <button><BiPaperclip className='sm-btn' /></button>
                            <button><BiSend className='sm-btn' /></button>
                            <button><BiDotsVerticalRounded className='sm-btn' /></button>
                        </div>
            </div>
            <div className='sm-input-flex'>
                <label className='sm-label'>From</label>
                <input type='text' className='sm-input' />
            </div>
            <div className='sm-input-flex'>
                <label className='sm-label'>To</label>
                <input type='text' className='sm-input'  />
            </div>
            <div className='sm-input-flex'>
                <input type='text' className='sm-input' placeholder='Subject' />
            </div>
                    
            <textarea className='sm-textarea' placeholder='Compose email' />
        </div>
    </>
  )
}

export default CreateMessage