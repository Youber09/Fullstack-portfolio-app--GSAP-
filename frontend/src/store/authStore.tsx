import {create} from 'zustand'
import axios from 'axios'

const URL = `http://localhost:5000/api/auth`

axios.defaults.withCredentials = true

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isCheckingAuth: true,
    isLoading: false,

    signup: async (email: string,password: string,name: string) => {
        set({isLoading: true, error: null})

        try{
            const response = await axios.post(`${URL}/signup`, {email,password,name})
            set({user: response.data.user, isAuthenticated: true, isLoading: false})
        }catch(error : any){
            set({error: error.response.data.message || `Trouble signing up`, isLoading: false})
            throw error
        }
    },
    verifyEmail: async (Code : string) => {
        set({isLoading: true, error: null})
        try {
            const response = await axios.post(`${URL}/verify-email`, {Code})
            set({user: response.data.user, isAuthenticated: true, isLoading: false})
        } catch (error: any) {
            set({error: error.response.data.message || `Trouble verifying email`, isLoading: false})
            throw error
        }
    },
    checkAuth: async () => {

        await new Promise((resolve) => setTimeout(resolve,1000))
        set({ isCheckingAuth : true , error: null})

        try {

            
            const response = await axios.post(`${URL}/check-auth`)
            set({isCheckingAuth: false, user: response.data.user, isAuthenticated: true})

        } catch (error: any) {
            
            console.log(error.response.data)

            set({error: null, isCheckingAuth: false, isAuthenticated: false})
            
        }

        
    },
    login: async ({email,password} : {email: string, password: string}) => {
        set({ isLoading : true , error: null})

        console.log(email,password)

        try {

            const response = await axios.post(`${URL}/login`,{email,password})
            set({isCheckingAuth: false, user: response.data.user, isAuthenticated: true, isLoading: false})
            
        } catch (error: any) {
            set({error: error.response.data.message, isCheckingAuth: false, isAuthenticated: false, isLoading: false})
            throw Error
        }
    },
    logout: async () => {
        set({ isCheckingAuth : true , error: null})

        try {

            const response = await axios.post(`${URL}/logout`)
            set({isCheckingAuth: false, user: response.data.user, isAuthenticated: true})
            
        } catch (error) {
            set({error: null, isCheckingAuth: false, isAuthenticated: false})
            throw Error
        }
    },
    forgotPassword: async ({email} : {email: string}) => {

        set({ error: null,isLoading: true})

         try {


            const response = await axios.post(`${URL}/forgot-password`, {email})
            console.log(response.data)
            set({isCheckingAuth: false, user: response.data.user, isAuthenticated: true, isLoading: false})
            
        } catch (error: any) {
            set({error: error.response.data.message, isCheckingAuth: false, isAuthenticated: false, isLoading: false})
            throw Error
        }

    },
    resetPassword: async ({newPassword,token} : {newPassword: string,token: string}) => {

        set({ error: null,isLoading: true})

        try {

            const response = await axios.post(`${URL}/reset-password/${token}`, {password: newPassword})
            set({isCheckingAuth: false, user: response.data.user, isAuthenticated: true, isLoading: false})
            
        } catch (error: any) {
            console.log( error)
            set({error: error.response.data.message, isCheckingAuth: false, isAuthenticated: false, isLoading: false})
            throw Error
        }

    },
    removeError: () => {
        set({error: null})
    }
}))