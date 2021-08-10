import React, { useEffect } from 'react';
import { useDispatch, useSelector }  from 'react-redux'

import './style/App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import FeedBar from './component/Feed/FeedBar';
import Login from './component/auth/Login';

import { login, logout, selectUser } from './features/userSlice';
import { auth } from './db/Firebase';
import Widget from './component/Widgets/Widget';

function App() {

  const user = useSelector(selectUser);
  const dispatach = useDispatch();
  useEffect(()=>{
     auth.onAuthStateChanged((authUser)=>{
       if(authUser){
         // user is logged in
         dispatach(login({
            email: authUser.email,
            uid: authUser.uid,
            displayName: authUser.displayName,
            photoURL: authUser.photoURL

         }))
       }else{
         // user is logout
         dispatach(logout());
       }
     })
  },[] )
  
  return (
    <div className="app">
      
      {/* Header */}
      <Header />
      {/*  App Body  */}
      {!user ? (<Login />):(

          <div className="app__body">
            {/* Side bar */}
            <Sidebar />
          {/*  Feed */}
            <FeedBar />
          {/* Widgets */}
          <Widget />
          </div>
      ) }
      
      {/* Footer */}
    </div>
  );
}

export default App;
