import React,{forwardRef} from 'react'
import '../../style/Post.css'
import InputOption from './InputOption'

import  Avatar from '@material-ui/core/Avatar'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import Input from '@material-ui/core/Input';

const Post = forwardRef(({name, description, message,photoUrl},ref)=> {
   
  
    const postComment = ()=>{
      
    }


    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}> {name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpOutlinedIcon}  title="Like"  color="#3252a8" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment"  color="#cceb34" buttonClick={postComment} />
                <InputOption Icon={ShareOutlinedIcon}  title="Share"  color="#34eb77"/>
                <InputOption Icon={SendOutlinedIcon} title="Send"  color="#eb6434"/>
            </div>
        </div>
    )
})



export default Post
