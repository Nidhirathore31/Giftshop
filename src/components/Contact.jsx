import React from 'react'
import './Contact.css'
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Contact = () => {
  return (
    <>
   <div className="hero ">
    
        
    <div className='sub-menu-wrap' id='subMenu'>
        <div className='sub-menu'>
            <div className='user-info'>
             <nav>
            <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt=""  />
            <h2>Nidhi Rathore</h2>
            </nav> </div>
            <hr />
            <a href="#" className='sub-menu-link'>
              <span className='ispan'><EditIcon/></span>
              <p>Edit Profile </p>
              <span> &#11166;</span>
            </a>
            <a href="#" className='sub-menu-link'>
              <span className='ispan'> <SettingsIcon/></span>
              <p>Settings & privacy  </p>
              <span>&#11166;</span>
            </a>
            <a href="#" className='sub-menu-link'>
              <span className='ispan'><HelpIcon/></span>
              <p>Help & Support  </p>
              <span>&#11166;</span>
            </a>
            <a href="#" className='sub-menu-link'>
             <span className='ispan'><LogoutIcon/></span>
              <p>Logout </p>
              <span> &#11166;</span>
            </a>
        </div>
    </div>
   </div>
    </>
  )
}

export default Contact
