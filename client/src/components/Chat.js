import React from 'react'

const Chat = () => {
  return (
    <>
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
                
        </div>  
        
    </>
  )
}

export default Chat