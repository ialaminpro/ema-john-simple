import React, { useState, useContext, useEffect, createContext } from 'react';
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from "../../firebase.config"

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const AuthContext = createContext();

  export const AuthContextProvider = (pros) => {
     const auth = Auth();
     return <AuthContext.Provider value={auth}>{pros.children}</AuthContext.Provider>
  }

  export const useAuth = () => useContext(AuthContext);
  
  const getUser = user=> {
    const {displayName, email, photoURL} = user;
    return {dname : displayName, email, photo : photoURL};
  }
  const Auth = () => {
      
    const [user, setuser] = useState(null);
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res =>  {
            const signedInUser = getUser(res.user);
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
    
    useEffect(() => {
      firebase.auth().onAuthStateChanged(function(usr){
        if(usr) {
          const currentUser = getUser(usr);
          setuser(currentUser);
        }else{

        }
      })
    },[])

    return {
      user,
      signInWithGoogle,
      signOut
    }
  }

  export default Auth;
  