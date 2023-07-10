import React from 'react'
import { AiFillFacebook,AiOutlineInstagram,AiOutlineMail } from 'react-icons/ai';
function Footer() {
  return (
    <div className='Footer'>
      <div className="topfooter-container">
      <h3>Contact Us:</h3>

      </div>
      <div className="bottomfooter-container">

      <ul>
        <li>instegram<AiOutlineInstagram/></li>
        <li>Facebook<AiFillFacebook/></li>
         <a  href="mailto:admin@gmail.com">
         <li  >  mail<AiOutlineMail/> </li>
          </a> 
      </ul>
      </div>
    </div>
  )
}

export default Footer