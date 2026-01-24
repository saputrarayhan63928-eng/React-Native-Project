import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';

type User = {
  username:string
  password:string
}

type AuthContextType = {
  isAuthenticated: boolean
  isLoading:boolean
  login: (usename: string, password: string) => Promise<void>
  register: (username:string, password:string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

const EXPIRED_KEY = 'expired_at' 

// simulasi token login selama 1 menit
const TOKEN_LIFETIME = 60 * 1000

function AuthProvider({children} : {children: React.ReactNode}){
  const [users, setUsers] = useState<User[]>([])
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const [isLoading,setIsLoading] = useState(true)

  // ---cek token saat app pertama kali di buka---
  useEffect(() => {
    checkSession()
  }, [])

  const checkSession = async () =>{
    try{
      const expiredAt = await AsyncStorage.getItem(EXPIRED_KEY)
      const token = await Keychain.getGenericPassword()

      if(!expiredAt || !token){
        await forceLogout()
        return
      }

      const isExpired = Date.now() > Number(expiredAt)

      if(isExpired) {
        await forceLogout()
      } else{
        setIsAuthenticated(true)
      }
    }catch{
      await forceLogout()
    }finally{
      setIsLoading(false)
    }
  }

  const saveSession = async (token: string) => {
    const expiredAt = Date.now() + TOKEN_LIFETIME
    await Keychain.setGenericPassword('token', token)
    await AsyncStorage.setItem(EXPIRED_KEY, expiredAt.toString())
    setIsAuthenticated(true)
  }

  const login = async ( username: string, password:string) => {
    //  simulasi login
    const user = users.find(u => u.username === username && u.password === password)
    if(!user){
      throw new Error("Username atau Password Salah")
    }

     await saveSession('dummy-access-token')
  }

  const register = async (username:string,password:string) => {
      if (!username || !password) {
    throw new Error('Data tidak lengkap')
  }

    const exists = users.some(u => u.username === username)
    if(exists){
      throw new Error('Username sudah terdaftar')
    }
    if(!username || !password){
      throw new Error('Data tidak lengkap')
    }
    setUsers(prev => [...prev, {username,password}])
    await saveSession('dummy-access-token')
  }

  const forceLogout =async () => {
    await Keychain.resetGenericPassword()
    await AsyncStorage.removeItem(EXPIRED_KEY)
    setIsAuthenticated(false)
  }

  const logout = async () => {
    await forceLogout()
  }

  return(
    <AuthContext.Provider
     value={{ isAuthenticated,isLoading,login,register,logout}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if(!ctx) throw new Error('useAuth harus di dalam AuthProvider')
    return ctx
}

export default AuthProvider