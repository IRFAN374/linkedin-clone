import React, { useEffect, useState } from 'react'
import '../../style/feedbar.css'
import Post from './Post';
import CreateIcon from '@material-ui/icons/Create';

import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImageIcon from '@material-ui/icons/Image';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';

import { db } from '../../db/Firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function FeedBar() {
    const [posts, setPosts]= useState([])
    const [input, setInput] = useState('');

    const user =useSelector(selectUser);
    console.log("user",user)

     useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
            setPosts( snapshot.docs.map((doc)=>{
                return( { id: doc.id, data: doc.data() } )
            }))
        })
    },[])

    const sendPosts=(event)=>{
        event.preventDefault()
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,  // user description 
            message: input,
            photoUrl: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className="feedbar">
           
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                     <form>
                         <input value={input} onChange={(event)=> setInput(event.target.value)} type="text" />
                         <button onClick={sendPosts} type="submit">Send</button>
                     </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption title="photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputOption title="video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="write articles" Icon={ CalendarViewDayIcon}  color="#7FC15E" />
                </div>
            </div>
          
          {/* Post goes here */}
          <FlipMove>
            {
                posts.map((post)=>{
                    const {id,data: {name, description, photoUrl,message} } = post;
                    return(
                        <Post key={id} name={name} description={description} message={message} photoUrl ={photoUrl} />
                    )
                })
            }
          </FlipMove>
        
        </div>
    )
}

export default FeedBar
