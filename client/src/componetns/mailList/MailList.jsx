import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className="mail">
        <a href="#" className="mailTitle">Save time, Save money</a>
        <span className="mailSesc">
            Sign up and we'll send notification
        </span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your mail' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList