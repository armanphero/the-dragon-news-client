import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUsersProfile = (user, displayName, photoURL) => {
        updateProfile(user, {
            displayName: displayName, photoURL: photoURL
        })
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }

    const userInfo = {
        createUser,
        updateUsersProfile,
        loginUser,
        logOutUser,
        setUserData,
        userData,
        isLoading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUserData(user);
            setIsLoading(false);
            console.log(user);
        })
        return () => unsubscribe();
    }, [])
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;