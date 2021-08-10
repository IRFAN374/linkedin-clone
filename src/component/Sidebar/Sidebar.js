import  Avatar from '@material-ui/core/Avatar'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import '../../style/Sidebar.css'

function Sidebar() {

    const recentItem = (topic)=>{
       return <div className="sidebar__recentItem">
            <span className="sidebar__hash"># </span>
            <p>{topic}</p>
        </div>
    }
   
    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            
            <div className="sidebar__top">
               <img alt="background_img" src="https://www.desktopbackground.org/download/o/2013/09/09/636091_photo-studio-backgrounds-creative-graphics-hd-wallpapers_1920x1200_h.jpg" />
               <Avatar className="sidebar__avatar" src={user.photoURL} >{user.displayName[0]}</Avatar> 
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>   
            </div>

            <div className ="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you: </p>
                    <p className="sidebar__statNumber">2,987</p>
                </div>
                <div className="sidebar__stat">
                    <p> views on post: </p>
                    <p className="sidebar__statNumber">2,345</p>
                </div>
            </div>
            
            <div className="sidebar__bottom">
                <p>Recent Projects: </p>
                
                {recentItem("programming")}
                {recentItem("C++")}
                {recentItem("Reactjs")}
                {recentItem("NodeJs")}
                {recentItem("firebase")}
                {recentItem("Software Developer")}
            </div>
        </div>
    )
}

export default Sidebar
