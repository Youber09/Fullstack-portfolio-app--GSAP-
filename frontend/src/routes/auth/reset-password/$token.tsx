import { useForm } from '@tanstack/react-form'
import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'
import { useAuthStore } from '../../../store/authStore'
import Loading from '../../../assets/svgs/Loading'
import { useEffect } from 'react'

export const Route = createFileRoute('/auth/reset-password/$token')({
  component: RouteComponent,
})

function RouteComponent() {

  const {token} = useParams({from: '/auth/reset-password/$token'}) as {token: string}
  const {resetPassword,error, isLoading,removeError} = useAuthStore() as {resetPassword: Function, error: any, isLoading: boolean,removeError: Function}

  useEffect(() => {
      removeError()
    },[])
  const navigate = useNavigate()


  const form = useForm({
    defaultValues: {
      password: ``,
      confirmation: ``
    },
    onSubmit: async (value) => {

      try {

        await resetPassword({newPassword: value.value.password, token})
        navigate({to: `/auth/login`})
        
      } catch (error) {
        console.log(error)
      }

      
      

    }
  })


  return <div className='h-svh w-full bg-black grid-bg flex justify-center items-center'>
    <form className='border-white/20 bg-white/5 p-[5%] py-[2%] rounded-[0.5vw]' onSubmit={(e) => {e.preventDefault(); form.handleSubmit()}}>
        <h2 className='text-white font-bold font-[Oswald] text-[4vw] tracking-tight text-center'>Create a new password</h2>
        <p className='font-[Oswald] text-[1.2vw] font-light text-white/70 tracking-wide text-center'>you have 1 hour before it expires</p>
        <div className='flex justify-around items-center flex-col space-y-[1vw] w-[50vw] p-[5%] px-[2%]'>
            <form.Field name='password' validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: (value) => {

                if (value.value.length > 18 || value.value.length < 3){
                  return `Please write a password longer than 3 and shorter than 18 characters`
                }

              }
            }} children={field => {
            
              return <><input type="password" className="outline-0 border-[0.1vw] border-white/20 bg-stone-900 w-full h-[4vw] mx-[2%] rounded-[0.5vw] text-center text-[2vw] font-[Oswald] font-light text-white/80" placeholder="Password" value={field.state.value} onChange={e => {field.handleChange(e.target.value)}} />
                {field.state.meta.errors && <div className='text-red-500 text-[0.8vw] ml-[3%]'>
                  {field.state.meta.errors}
                </div>}
              </>

            }} />

              
            <form.Field name='confirmation' validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: (value) => {

                if (value.value !== form.state.values.password){
                  return `Please write a matching password`
                }

              }
            }} children={field => {
            
              return <><input type="password" className="outline-0 border-[0.1vw] border-white/20 bg-stone-900 w-full h-[4vw] mx-[2%] rounded-[0.5vw] text-center text-[2vw] font-[Oswald] font-light text-white/80" placeholder="Confirm" value={field.state.value} onChange={e => {field.handleChange(e.target.value)}} />
                {field.state.meta.errors && <div className='text-red-500 text-[0.8vw] ml-[3%]'>
                  {field.state.meta.errors}
                </div>}
              </>
            }} />

             

        </div>
        <button disabled={isLoading} type='submit' className='text-[2vw] font-[Oswald] font-medium text-center bg-fuchsia-500 text-black py-[2%] w-full rounded-[0.5vw] sweep before:absolute overflow-hidden relative hover:scale-102 cursor-pointer transition-all disabled:hover:scale-100 disabled:bg-gray-600 disabled:cursor-auto flex justify-center'>{isLoading ? <Loading /> : `Reset` }</button>
        {error ? <p className='text-[1.3vw] text-red-500 font-light text-center w-full mt-[2%] font-[Oswald] tracking-wider'>{error}</p>: ''}
    </form>
  </div>
}
