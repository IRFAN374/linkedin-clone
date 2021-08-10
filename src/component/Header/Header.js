import React from 'react'
import '../../style/Header.css';
import HeaderOption from './HeaderOption';

import HomeIcon from '@material-ui/icons/Home';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../db/Firebase';
import { logout, selectUser } from '../../features/userSlice';


function Header() {
    
   const dispatch = useDispatch();
   const user = useSelector(selectUser)
//    console.log("user",user)

    const logOutToApp = ()=>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
           {/* header left = icon and search bar */}
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="header-icon" />
                <div className="header__search">
                    <SearchSharpIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        {/*  header right = profile  related stuff */}
            <div className="header__right">
               <HeaderOption title="Home" Icon= {HomeIcon} />
               <HeaderOption title="My Network" Icon= {SupervisorAccountIcon} />
               <HeaderOption title="Jobs" Icon= {BusinessCenterIcon} />
               <HeaderOption title="Messages" Icon= {ChatIcon} />
               <HeaderOption title="Notifications" Icon= {NotificationsIcon} />
              
               <HeaderOption logOutToApp={logOutToApp} title={user?.displayName} avatar={user ? user.photoURL : user?.displayName} />
             
              {/* <HeaderOption logOutToApp={logOutToApp} title="ME" avatar="https://i.pinimg.com/originals/16/80/85/168085d42c87f228ad8fe73238b9b1a7.jpg" /> */}
               
            </div>
        </div>
    )
}

export default Header
