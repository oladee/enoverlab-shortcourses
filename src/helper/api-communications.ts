import axios from 'axios'
import {  signUpProp } from '../declarations'

export const loginUser = async(urlPath: string, email: string, password : string)=>{
    console.log('response')
    const response = await axios.post(urlPath, {email, password})
    console.log(response)
    
    if(response.status !== 200){
        throw new Error('Unable to log in')
    }
    const data = response.data
    return data
}

export const signinUser = async({urlPath, values}: signUpProp)=>{
    const response = await axios.post(urlPath, values)
    if(response.status !== 200){
        throw new Error('Unable to Sign Up')
    }
    const data = response.data
    return data
}

export const whoami = async(urlPath : string)=>{
    const response = await axios.get(urlPath)
    if(response.status !== 200){
        throw new Error('User not logged in')
    }
    const data = response.data
    return data
}