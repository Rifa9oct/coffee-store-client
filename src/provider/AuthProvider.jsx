import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext (null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);

    const creatUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo ={
        user,
        loading,
        creatUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;