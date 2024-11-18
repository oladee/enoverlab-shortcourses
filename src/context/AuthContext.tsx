import { createContext, useContext, useEffect, useState } from "react";
import { contextProps,  userprop } from "../declarations";
import { loginUser, signinUser, whoami } from "../helper/api-communications";

interface authProp {
    userData : userprop | undefined
    isLoggedin : boolean
    login : (email : string, password : string, urlPath: string)=> Promise<void>
    signup : (values :  {email : string, password : string, name : string}, urlPath: string)=> Promise<void>
    logout : ()=> Promise<void>
}

const AuthContext = createContext<authProp | undefined>({} as authProp)


export const AuthProvider = ({children}: contextProps)=>{
    const [userData, setUserData] = useState<userprop>()
    const [isLoggedin, setIsLoggedin] = useState<boolean>(false)
    useEffect(()=>{
        try {
            const getAuth = async ()=>{
                const urlPath = '/auth/whoami'
                const data = await whoami(urlPath)
                if(data){
                    setIsLoggedin(true)
                    setUserData(data)
                }
            }
            getAuth()
            
        } catch (error) {
            console.log(error)
            setIsLoggedin(false)
        }
    },[])

    const login = async(email:string, password: string, urlPath:string)=>{
        const data = await loginUser(urlPath, email, password)
        if(data){
            setUserData(data)
            setIsLoggedin(true)
        }
    }

    const signup = async(values : {email : string, password : string, name ?: string}, urlPath:string)=>{
        const data = await signinUser({ urlPath, values})
        if(data){
            setUserData(data)
            setIsLoggedin(true)
        }
    }
    const logout= async()=>{
    }
    return(<AuthContext.Provider value={{userData, isLoggedin, login, signup, logout}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = ()=> useContext(AuthContext)