import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'




export const AuthContext = createContext();
const auth = getAuth(app)




const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

// Creating a new user
const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}



const googleLogIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
}

const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
}


const logOut = () => {
    setLoading(true)
    return signOut(auth)
}


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log("current user in auth state", currentUser);
        setUser(currentUser)
        setLoading(false);
    })
    return () => unsubscribe();
},[])


const authInfo = {user, setUser, loading, setLoading, createNewUser, googleLogIn,
logIn, updateUserProfile, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;