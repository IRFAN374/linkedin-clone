import React from 'react'
import '../../style/HeaderOption.css'
import Avatar from '@material-ui/core/Avatar';



function HeaderOption({Icon, title, avatar,logOutToApp}) {
    return (
        <div className="headerOption">
            { Icon && <Icon className="headerOption__icon" /> }
            { avatar &&  <Avatar onClick={logOutToApp} alt="md Irfan" src={avatar} className="headerOption__avatar" /> }
            <h3 className="headerOption__title"> {title} </h3>
        </div>
    )
}

export default HeaderOption
