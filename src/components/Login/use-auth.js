import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from "../../firebase.config"

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const Auth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle = () => {

        firebase.auth().signInWithPopup(provider)
        .then(res =>  {
            console.log(res);
            return res.user;
          })
          .catch(err =>  {
                console.log(err);
                return err.message;
          });
    }
    return {
        signInWithGoogle
    }
  }

  export default Auth;
  