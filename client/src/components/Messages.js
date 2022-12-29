import React from 'react'
import { BiArrowBack, BiDotsVerticalRounded,BiEnvelope, BiTrash, BiStar, BiReply, BiRedo, BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from 'react-router-dom'

const Messages = () => {
  return (
    <>
        <div className='msgs-container'>
                <div className='msgs-head'>
                    <div>
                        <button><BiArrowBack className='msgsi-btn' /></button>
                    </div>
                    <div>
                        <button><BiTrash className='msgs-btn' /></button>
                        <button><BiEnvelope className='msgs-btn' /></button>
                        <button><BiDotsVerticalRounded className='msgs-btn' /></button>
                    </div>
                </div>


                <div className='msgs-title-flex'>
                    <h3 className='msgs-title'>Re: You Sa</h3>
                    <button className='msgt-btn'>Inbox x</button>
                </div>

                <div className='msgs-content'>
                    <div className='msgc-head'>
                        <div className='msgc-btn'>S</div>
                        <div className='msgc-grid'>
                            <div className='msgc-name-time'>
                                <h4 className='msgc-name'>Suleman Akanbi</h4>
                                <p className='msgc-time'>1:35 PM</p>
                            </div>
                            <p className='msgc-text'>What whave youbeing doin whave youbeing doin whave youbeing doin whave youbeing doin</p>
                        </div>
                    </div>

                    <div className='msgc-head'>
                        <div className='msgc-btn'>S</div>

                        <div className='msgc-name-time'>
                            <div className='msg-name-grid'>
                                <div className='msgc-name-time'>
                                    <h4 className='msgc-name'>Suleiman Akanbi</h4>
                                    <p className='msgc-text gmail-name'>bolaji00x@gmail.com?</p>
                                </div>
                                <p className='msgc-text'>to Suleiman</p>
                            </div>
                            <div className='msgc-time-btn'>
                                <p className='msgc-text'>1:35 PM</p>
                                <div className='msgc-btn-container'>
                                    <button><BiStar className='msgcbtn' /></button>
                                    <button><BiReply className='msgcbtn' /></button>
                                    <button><BiDotsVerticalRounded className='msgcbtn' /></button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div>
                        <p className='msgc-text'>ppppp</p>
                        <button><BiDotsHorizontalRounded /></button>
                        <div>
                            <p className='msgc-text'>On  Sun Dec, 18 20220 at 1:35 PM Suleiman Akanbi <Link>thebej01@gmail.com</Link> wrote:</p>
                        
                        </div>

                        <div className='msgs-btn-container'>
                            <button className='rf-btn-cont'>
                                <button><BiReply className='rf-btn' /></button>
                                <p>Reply</p>
                            </button>
                            <button className='rf-btn-cont'>
                                <button><BiRedo className='rf-btn' /></button>
                                <p>Forward</p>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Messages