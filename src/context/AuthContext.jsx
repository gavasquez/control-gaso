import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../supebase/supabase.config';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (session == null) {
                    setUser(null);
                } else {
                    setUser(session.user.user_metadata)
                    console.log("session", session.user.user_metadata);
                    console.log("event", event);
                }
            }
        );
        return () => {
            authListener.subscription;
        }
    }, []);
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}