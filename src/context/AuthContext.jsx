import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../supebase/supabase.config';
import { InsertarUsuarios } from '../supebase/crudUsuarios';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (session == null) {
                    setUser(null);
                } else {
                    setUser(session.user.user_metadata);
                    insertarUsuarios(session.user.user_metadata, session.user.id);
                    console.log("session", session.user.id);
                    console.log("event", event);
                }
            }
        );
        return () => {
            authListener.subscription;
        }
    }, []);
    const insertarUsuarios = async (dataProvider, idauth_supabase) => {
        const parametros = {
            nombres: dataProvider.name,
            foto: dataProvider.picture,
            idauth_supabase,
        }
        await InsertarUsuarios(parametros);
    }
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}