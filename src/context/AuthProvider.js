import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'




export const AuthContext = createContext();
const auth = getAuth(app)




const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}





const googleLogIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
}



useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log("current user in auth state", currentUser);
        setUser(currentUser)
        setLoading(false);
    })
    return () => unsubscribe();
},[])


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;