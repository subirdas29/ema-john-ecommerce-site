import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState(null)

    const signUp = (email,password) =>
    {
        setLoading(true); //data ag e load nibe erpr api check korbe
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email,password) =>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>
    {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsbscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return() => unsbscribe(); //ekhane return function diya unsbscribe kora hoi karon jkn kno user website theke cole jabe tkn observer jate automatic unsbscribe hoi jai sejonnoi.
    } ,[])
    const authInfo ={user,signUp,login,logOut,loading}
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default UserContext;