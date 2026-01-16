import React, { createContext, useContext, useState} from "react";

type user = {
    username: string
    password: string
}

type AuthContextType ={
    users: user[]
    currentUser: user | null
    register: (username:string, password:string) => void
    login: (username:string,password:string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

function AuthProvider({children}: {children: React.ReactNode})  {
    const [users, setUsers] = useState<user[]>([])
    const [currentUser,setCurrentUser] = useState<user | null>(null)

    const register= (username: string, password:string) => {
        const exists = users.find(u => u.username === username)
        if(exists){
            throw new Error('Username Sudah Terdaftar!')
        }

        setUsers(prev => [...prev,{username,password}])
    }

    const login= (username: string,password:string) => {
        const user = users.find(u => u.username === username && u.password === password)
        if(!user){
            throw new Error('Username Atau Password Salah!!')
        }

        setCurrentUser(user)
    }
    
    const logout = () => setCurrentUser(null)

    return(
        <AuthContext.Provider
            value={{users,currentUser,register,login,logout}}
        >
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if(!ctx) throw new Error("useAuth harus di dalam AuthProvider")
    return ctx
}

export default AuthProvider