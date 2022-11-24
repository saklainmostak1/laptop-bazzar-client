import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email ,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth ,email, password)
    }
    const updateUser = (userInfo) => {
        return updateUser(auth.currentUser , userInfo)
    }
    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
               setUser(currentUser)
               
           })
           return () => unsubscribe()
         
       }, [])

    const authInfo= {
        user,
        createUser,
        updateUser,
        googleLogin,
        logIn,
        logOut,

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;