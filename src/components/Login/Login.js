import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth();
    console.log(auth);
    return (
        <div>
            <button onClick={auth.signInWithGoogle}>Sign in with google</button>
        </div>
    );
};

export default Login;