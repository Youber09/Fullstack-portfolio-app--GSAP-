import bcryptjs from "bcryptjs"
import crypto from "crypto"

import {User} from "../models/user.model.js"
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"
import { resetPasswordEmail, sendForgotPasswordEmail, sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js"
import jwt from "jsonwebtoken"

export const signup =  async (req,res) => {

    const {email,password,name} = req.body.email

    try{

        if (!email || !password || !name){
            
            throw new Error(`All fields must be filled`)
        }

        const userAlreadyExists = await User.findOne({email})
        if (userAlreadyExists) {
            res.status(400).json({success: false, message: `User already exists`})
            return
        }

        const hashedPassword = await bcryptjs.hash(password, 10)
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 *60*60*1000
        })

        await user.save()

        //jwt
        generateTokenAndSetCookie(res,user._id)

        sendVerificationEmail(user.email,verificationToken)

        res.status(201).json({success: true,message: `User created`, user: {...user, password:null}})

    }catch(err){
        res.status(400).json({success: false, message: err.message})
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


export const login = async (req,res) => {

    const {password,email} = req.body

    try{

        if (!email || !password){
                
            throw new Error(`All fields must be filled`)
        }


        const user = await User.findOne({
            email
        })

        if (!user){
            res.status(400).json({success: false, message: `Incorrect email`})
            return
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password)

        if (!isPasswordValid){
            res.status(400).json({success: false, message: `Incorrect password`})
            return
        }

        generateTokenAndSetCookie(res,user._id)

        user.lastLogged = Date.now()
        await user.save()

        res.status(200).json({success: true, message: `User logged in successfully`, user: {...user._doc, password: null}} )

    }catch(err){

        res.status(400).json({success: false, message: `Failed to Login`})
        
    }

    

}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


export const logout = async (req,res) => {
    res.clearCookie(`token`)
    res.status(200).json({success: true, message: `User logged out successfully`})
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


export const verifyEmail = async(req,res) => {
    
    const {Code} = req.body

    console.log(Code)

    const user = await User.findOne({
        verificationToken: Code,
        verificationTokenExpiresAt: {$gt: Date.now()}
    })

    if (!user){
        res.status(400).json({success:false,message: `invalid or expired`})
        return
    }

    user.isVerified = true
    user.verificationToken = undefined
    user.verificationTokenExpiresAt = undefined
    await user.save()

    sendWelcomeEmail(user.email,user.name)

    res.status(200).json({success:true,message:`worked correctly`})
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


export const forgotPassword = async ( req,res) => {

    const {email} = req.body

    try{

        if (!email){   
            throw new Error(`All fields must be filled`)
        }

        const user = await User.findOne({email})

        if (!user){
            res.status(400).json({success: false ,message: `User doesn't exist`})
            return
        }   

        const token = crypto.randomBytes(20).toString(`hex`)
        const tokenExpiresAt = Date.now() + 60 * 60 * 1000

        user.resetPasswordToken = token
        user.resetPasswordExpiresAt = tokenExpiresAt

        await user.save()

        sendForgotPasswordEmail(email, `${process.env.CLIENT_URL}/reset-password/${token}`)

        res.status(200).json({success: true, message: `Password reset email sent`})


    }catch(err){
        res.status(400).json({success: false, message: `Error occurred`})
    }

}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


export const resetPassword = async (req, res) => {
    const {password} = req.body
    const {token} = req.params

    try {

        if (!password){
            throw new Error(`All fields must be filled`)
        }

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: { $gt: Date.now()}
        })

        if (!user){
            return res.status(400).json({success: false, message: `token Expired`})
        }

        user.password = await bcryptjs.hash(password, 10)
        user.resetPasswordToken = undefined
        user.resetPasswordExpiresAt = undefined

        console.log(user)

        await user.save()

        resetPasswordEmail(user.email)

        res.status(200).json({success: true, message: `Password reset successfully`})

    } catch (err) {

        res.status(400).json({success: false, message: err.message})

    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const verifyToken = async (req,res,next) => {
    const token = req.cookies.token
    if (!token) return res.status(400).json({success: false, message: `Token Expired`})

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) return res.status(400).json({success: false, message: `Token invalid`})

        req.userId = decoded.userId

        next()
        
    } catch (error) {
        res.status(400).json({success: false, message: `Token Error`})
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


export const checkAuth = async (req,res) => {

    const userId = req.userId


    if (!userId) res.status(400).json({success: false, message: `User doesn't have the right cookies`})

    try {

        const user = await User.findById(userId).select(`-password`)

        if (!user) res.status(400).json({success: false, message: `User not found`})


        res.status(200).json({success: true, message: `User Logged in successfully`, user })
        
    } catch (error) {
        res.status(400).json({success: false, message: `User invalid`})
    }

}
