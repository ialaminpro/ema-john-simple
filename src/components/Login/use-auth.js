import React, { useState, useEffect } from 'react';
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from "../../firebase.config"

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const Auth = () => {
      
    const [user, setuser] = useState(null);
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res =>  {
            const {displayName, email, photoURL} = res.user;
            const signedInUser = {dname : displayName, email, photo : photoURL} 
            setuser(signedInUser);
            return res.user;
          })
          .catch(err =>  {
                setuser(null);
                return err.message;
          });
    }
    const signOut = () => {
        firebase.auth().signOut().then(function() {
            setuser(null);
          }).catch(function(error) {
            // An error happened.
          });
    }
    return {
        user,
        signInWithGoogle,
        signOut
    }
  }

  export default Auth;
  