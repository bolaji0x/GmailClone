import React from 'react'
import { FaCompressAlt, FaMinus, FaRegTrashAlt, FaTimes } from "react-icons/fa";
import { useAppContext } from '../context/appContext';
const SendMessage = () => {
    const { showModal, toggleModal } = useAppContext()

  return (
    <>
        <div className='send-section'>
            <form className={!showModal ? 'send-container' : 'send-container show-modal'}>
                <div className='sc-head'>
                    <h4 className='sc-name'>New Message</h4>
                    <div className='scbtn-container'>
                        <button type='button'><FaMinus className='sc-btn' /></button>
                        <button type='button'><FaCompressAlt className='sc-btn' /></button>
                        <button type='button' onClick={toggleModal}><FaTimes className='sc-btn' /></button>
                    </div>
                </div>
                <div className='scto-input'>
                    <p className='sc-to'>To</p>
                    <input 
                        type='text'
                        className='sc-input'
                    />
                </div>
                <div>
                    <input 
                        type='text'
                        placeholder='Subject'
                        className='sub-input'
                    />
                </div>
                <div>
                    <textarea
                        type='text'
                        className='sc-textarea'
                    />
                </div>

                <div className='sbtn-section'>
                    <button type='submit' className='send-btn'>Send</button>
                    <button type='button'><FaRegTrashAlt className='sb-btn' /></button>
                </div>
            </form>
        </div>
    </>
  )
}

export default SendMessage