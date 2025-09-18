import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { useAuthStore } from '../../store/authStore'
import Loading from '../../assets/svgs/Loading'

export const Route = createFileRoute('/verification/verify-email')({
  component: RouteComponent,
})

function RouteComponent() {

    const [code,setCode] = useState(["", "", "", "", "", ""])
    const inputRefs = useRef<HTMLInputElement[]>([])
    const [disabled,setDisabled] = useState(true)

    const {verifyEmail,isLoading,error} = useAuthStore() as {verifyEmail:Function,isLoading:boolean,error: string}
    const navigate = useNavigate()

    useEffect(() =>{

        code.map((digit,index) => {
            if(code.every(digit => digit !== '')){
                setDisabled(false)
            }else{
                setDisabled(true)
            }
            
        })

    }, [code])

    const number = /^[0-9]+$/

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const verificationCode = code.join(``)
        
        try {
            await verifyEmail(verificationCode)
            navigate({to: `/`})
        } catch (error) {
            console.log(error)
        }
        
    }

  return <div className='h-svh w-full bg-black grid-bg flex justify-center items-center'>
    <form className='border-white/20 bg-white/5 p-[5%] py-[2%] rounded-[0.5vw]' onSubmit={handleSubmit}>
        <h2 className='text-white font-bold font-[Oswald] text-[4vw] tracking-tight text-center'>Verify your account</h2>
        <p className='font-[Oswald] text-[1.2vw] font-light text-white/70 tracking-wide text-center'>We sent you a verification email with a 6 digit code, paste it here to verify</p>
        <div className='flex justify-around items-center w-[50vw] p-[5%] px-[2%]'>
            {code.map((value: string, index: number) => {
                return <input key={index} type="text" ref={(el) => {if (inputRefs.current) {inputRefs.current[index] = el}}} className=" outline-0 border-[0.1vw] border-white/20 bg-stone-900 size-[7vw] w-[7vw] rounded-[1vw] text-center text-[3vw] font-[Oswald] font-light text-white/80" maxLength={6} value={value} 
                    onChange={(e) => {

                        const value = e.target.value
                        if (!number.test(value)) return

                        let newCode = [...code]

                        if (value.length > 1){
                            if (index >0) return
                            const split = value.split("")
                            split.map((digit,id) => {
                                if((index+id) >= code.length) return
                                newCode[index + id] = digit
                            })
                            setCode(newCode)
                            if ((index + value.length) === code.length) {
                                inputRefs.current[index + (value.length-1)].focus() 
                            }else{
                                inputRefs.current[index + (value.length)].focus()  
                            }
                             
                        } else{
                            
                            newCode[index] = value
                            setCode(newCode)
                            if (index === code.length-1) return
                            inputRefs.current[index + 1].focus()
                        }
                    
                }}

                onKeyDown={e => {

                    let newCode = [...code]

                    if(e.key === "Backspace" && code[index] !== ""){
                        newCode[index] = ''
                        setCode(newCode)
                        return
                    }
                    

                    if ( e.key === "Backspace" && index > 0) {

                        newCode[index-1] = ''
                        setCode(newCode)
                        inputRefs.current[index-1].focus()
                        
                        return
                    }

                    
                }} 
                
                />
            })}
        </div>
        <button disabled={isLoading ? true : disabled} type='submit' className='text-[2vw] font-[Oswald] font-medium text-center bg-fuchsia-500 text-black py-[2%] w-full rounded-[0.5vw] sweep before:absolute overflow-hidden relative hover:scale-102 cursor-pointer transition-all disabled:hover:scale-100 disabled:bg-gray-600 disabled:cursor-auto flex justify-center'>{isLoading ? <Loading /> : 'Verify'}</button>
        {error ? <p className='text-[1.3vw] text-red-500 font-light text-center w-full mt-[2%] font-[Oswald] tracking-wider'>{error}</p>: ''}
    </form>
  </div>
}