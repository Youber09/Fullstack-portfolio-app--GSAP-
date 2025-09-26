import { useForm } from '@tanstack/react-form'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Authentication from '../../components/Authentication.tsx'
import { useAuthStore } from '../../store/authStore.tsx'
import Loading from '../../assets/svgs/Loading.tsx'

export const Route = createFileRoute('/auth/Signup')({
  component: RouteComponent,
})


function RouteComponent() {

  const navigate = useNavigate()


  const {signup,error,isLoading,removeError} = useAuthStore() as {signup: Function, error: any, isLoading: boolean,removeError: Function}
  useEffect(() => {
      removeError()
    },[])



  const form = useForm({
    defaultValues: {
      email: ``,
      password: ``,
      name: ``
    },
    onSubmit: async ({value}) => {
      try {

        await signup(value)
        await navigate({to: '/verification/verify-email'})
        window.location.reload()

      } catch (error) {
        console.log(error)
      }
      
    }
  })

  const [password,setPassword] = useState(``)
  let state = ``
  let color = `red`
  
  let length = 0

  const number = /[0-9]/
  const capitalization = /[A-Z]/
  const specialCharacters = /[^a-zA-Z0-9]/
  const email = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  if (password.length > 0){
    length = length + 20
  }
  if (password.length > 6){
    length = length + 20
  }
  if (number.test(password)){
    length = length + 20
  }
  if (capitalization.test(password)){
    length = length + 20
  }
  if (specialCharacters.test(password)){
    length = length + 20
  }

  if (length === 20){
    state = `weak`
    color = `red`
  }
  if (length === 40){
    state = `weak`
    color = `red`
  }
  if (length === 60){
    state = `okay`
    color = `yellow`
  }
  if (length === 80){
    state = `good`
    color = `green`
  }
  if (length === 100){
    state = `great`
    color = `lime`
  }


  return <div className='h-svh w-full bg-black grid-bg flex  overflow-hidden'>

    <Authentication />

    <div className='flex flex-col w-[50vw] p-[5%] justify-center'>

      <div className=''>

        <p className=' text-white font-[Oswald] font-bold text-[5vw]/[5vw]'>Hey,<br />Welcome here!</p>

        <form className='  flex flex-col mt-[5%]' onSubmit={e => {e.preventDefault();e.stopPropagation();}}>

          <div className=' flex flex-col space-y-[1%]'>

            <form.Field name='name' validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: value => {
                if (value.value.length < 3) return `Name must be longer than 3 character`
                if (value.value.length > 18) return `Name must be shorter than 18 character`
              }
            }} children={(field) => {
              return <>
                <input className='outline-0 border-[0.2vw] border-white/10 rounded-[0.5vw] p-[2%] px-[3%] placeholder:text-[1.2vw] text-[1.2vw] bg-stone-950' type='name' name='' id='name' placeholder='Name' value={field.state.value} onChange={(e) => {field.handleChange(e.target.value)}} />
                {field.state.meta.errors && <div className='text-red-500 text-[0.8vw] ml-[3%]'>
                    {field.state.meta.errors}
                  </div>}
              </>
            }} />

            <form.Field name='email' validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: (value) => {
                if (!email.test(value.value)) return `Please enter a valid email`
              }
            }} children={(field) => {
              return <><input className='outline-0 border-[0.2vw] border-white/10 rounded-[0.5vw] p-[2%] px-[3%] placeholder:text-[1.2vw] text-[1.2vw] bg-stone-950' type='email' name='' id='email'  placeholder='Email' value={field.state.value} onChange={(e) => {field.handleChange(e.target.value)}}/>
                {field.state.meta.errors && <div className='text-red-500 text-[0.8vw] ml-[3%]'>
                    {field.state.meta.errors}
                  </div>}
              </>
            }} />

            <form.Field name='password' validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: ({value}) => {

                if (value.length < 6){
                  return `Password must at least be 6 characters long`
                }
                if (!number.test(value)){
                  return `Password must at least have a number`
                }
                if (!capitalization.test(value)){
                  return `Password must at least have a capitalized letter`
                }
                if (!specialCharacters.test(value)){
                  return `Password must at least have a special character`
                }

              }
            }} children={(field) => {
              return <><input className='outline-0 border-[0.2vw] border-white/10 rounded-[0.5vw] p-[2%] px-[3%] placeholder:text-[1.2vw] text-[1.2vw] bg-stone-950' value={password} onChange={e => {setPassword(e.target.value);field.handleChange(e.target.value)}} type='password' name='' id='password'  placeholder='Password'/>
                {field.state.meta.errors && <div className='text-red-500 text-[0.8vw] ml-[3%]'>
                    {field.state.meta.errors}
                  </div>}
              </>
            }} />
            
          </div>
        
          <div className='overflow-hidden flex justify-evenly mt-[2.5%] relative'>
            <span className='password-strength absolute h-full rounded-[.2vw] left-0 transition-all z-5' style={{width: `${length}%`,backgroundColor: color}}></span>
            <span className='password-strength absolute h-full rounded-[.2vw] left-0 w-full bg-white/20 z-1'></span>
            <span className='bg-black z-5 h-[0.3vw] w-[1.5%]'></span>
            <span className='bg-black z-5 h-[0.3vw] w-[1.5%]'></span>
            <span className='bg-black z-5 h-[0.3vw] w-[1.5%]'></span>
            <span className='bg-black z-5 h-[0.3vw] w-[1.5%]'></span>
          </div>

          <p className=' text-white text-[1.3vw] font-[Oswald] font-medium tracking-wide ml-[0.2%]' style={{color: color}}>{state}</p>

          <button disabled={isLoading} className=' disabled:bg-gray-800 disabled:hover:scale-100 bg-fuchsia-500 text-black rounded-[0.5vw] mt-[2%] p-[2.5%] font-[Oswald] font-bold text-[1.9vw] cursor-pointer sweep before:absolute overflow-hidden relative hover:scale-102 transition-all flex justify-center' onClick={form.handleSubmit}>{isLoading ? <Loading /> : 'Sign up'}</button>
          {error ? <p className='text-[1.3vw] text-red-500 font-light text-center w-full mt-[2%] font-[Oswald] tracking-wider'>{error}</p> : <></>}
        </form>
        <div className=' text-[1.2vw] font-[Oswald] font-light text-white/80 text-center mt-[5%]'>Already created? <Link to='/auth/login' className='text-indigo-300 cursor-pointer font-medium'>Login.</Link></div>
      </div>

      

    </div>

    

  </div>
}
