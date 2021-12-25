import React from 'react';
import './TopBar.css';

import {NotificationsNone, Language, Settings} from '@mui/icons-material';

export default function TopBar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">

              <div className="topLeft">
                  <span className='logo'>Admin</span>
              </div>

              <div className="topRight">
                  <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className='topIconBag'>2</span>
                  </div>

                  <div className="topbarIconContainer">
                    <Language />
                    <span className='topIconBag'>2</span>
                  </div>

                  <div className="topbarIconContainer">
                    <Settings />
                    <span className='topIconBag'>2</span>
                  </div>

                  <img src='https://wallpaperaccess.com/full/1480949.jpg' alt='Profile' className='topAvatar'/>
              </div>

            </div>  
        </div>
    )
}
