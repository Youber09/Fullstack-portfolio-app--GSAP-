import { sender, mailtrap_client } from "./mailtrap.config.js"
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js"

export const sendVerificationEmail = async (email,verificationToken) => {

    const recipient = [{email}]

    try{
        const response = await mailtrap_client.send({
            from: sender,
            to: recipient,
            subject: `Verify your email`,
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log(`Email sent successfully`)
    }catch(err){
        console.log(err.message)
    }

}

export const sendWelcomeEmail = async (email,userName) => {

    const recipient = [{email}]

    try{

        const response = await mailtrap_client.send({
            from: sender,
            to: recipient,
            template_uuid: "12cdc527-01f7-4ac4-97b0-e637cfc57f4d",
            template_variables: {
            company_info_name: "Crucks",
            name: userName,
            }
        })

        console.log(`password reset email sent successfully`, response)
    }catch(err){
        console.log(err.message)
    }

}

export const sendForgotPasswordEmail = async( email, resetURL) => {
    const recipient = [{email}]

    try{

        const response = await mailtrap_client.send({
            from: sender,
            to: recipient,
            subject: `Reset Password Link`,
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL)
        })

        console.log(`Welcome email sent successfully`, response)

    }catch(err){
        console.log(err.message)
    }
}

export const resetPasswordEmail = async (email) => {
    const recipient = [{email}]

    try {
        
        const response = await mailtrap_client.send({
            from: sender,
            to: recipient,
            subject: `Reset password successful`,
            html: PASSWORD_RESET_SUCCESS_TEMPLATE
        })

    } catch (error) {
        console.log(error)
    }
}