import React,{useState} from 'react'
import '../../style/login.css'
import { auth} from '../../db/Firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

function Login() {
    const [ name, setName ] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ profilePict, setProfilePict] = useState("");

    const dispatch = useDispatch()

   const registerApp = (event)=>{
       event.preventDefault();
       if(!name){
           alert("Please Enter a full name")
           return
       }
       auth.createUserWithEmailAndPassword(email,password)
       .then((authUser)=>{
           authUser.user.updateProfile({
               displayName: name,
               photoURL: profilePict
           }).then(()=>{
              dispatch(login({
                  displayName: name,
                  photoURL: profilePict,
                  email: authUser.user.email,
                  uid: authUser.user.uid
              }))
           })
       })
       .catch((error)=>{
           alert(error.message)
       })

   }

   const loginToApp = (event)=>{
     event.preventDefault();
     auth.signInWithEmailAndPassword(email,password)
     .then((authUser)=>{
         dispatch(login({
             email:authUser.user.email,
             uid: authUser.user.uid,
             displayName: authUser.user.displayName,
             photoURL: authUser.user.photoURL
         }))
     })
     .catch((error)=>{ alert(error.message)})
   }

    return (
        <div className="login">
            <img src="https://finalmonsoon.files.wordpress.com/2019/10/linkedin-logo.jpg?w=801&h=276&crop=1"  alt="image_logo"/>

            <form>
                <input type="text" value={name} onChange={(event)=> setName(event.target.value)} placeholder="Fullname (required SignUp)" />
                <input type="text"  value={profilePict} onChange={(event)=> setProfilePict(event.target.value)} placeholder="imageUrl (optional) "/>
                <input type="email" value={email} onChange={(event)=> setEmail(event.target.value)}  placeholder="Email "/>
                <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)}  placeholder="Password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a Member ?
                <span className="login__register" onClick={registerApp}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
