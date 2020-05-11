import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    return (
        <div>
            {
                auth.user?<button onClick={auth.signOut}>Sign out</button>:
                <button onClick={auth.signInWithGoogle}>Sign in with google</button>
            }
        </div>
    );
};

export default Login;