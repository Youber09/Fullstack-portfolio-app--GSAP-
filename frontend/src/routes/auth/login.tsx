import { useForm } from '@tanstack/react-form'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import Authentication from '../../components/Authentication'
import { useAuthStore } from '../../store/authStore'
import Loading from '../../assets/svgs/Loading'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {

  const {login,error,isLoading} = useAuthStore() as {login: Function, error: string, isLoading: boolean}
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      email: ``,
      password: ``
    },
    onSubmit: async ({value}) => {
      
      try {
        await login(value)
        navigate({to: `/`})
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
      
    }
  })

  const email = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  return <div className='h-svh w-full bg-black grid-bg flex  overflow-hidden'>

    <Authentication />

    <div className='flex flex-col w-[50vw] p-[5%] '>

      <p className=' text-white font-[Oswald] font-bold text-[5vw]/[5vw]'>Hey,<br />Welcome back!</p>
      <p className='text-[1.65vw] text-[#7d7d7d] font-[Oswald] font-light mt-[2%]'>Happy to see you again, hope you will surpass picasso!</p>

      <form className='  flex flex-col mt-[8%] space-y-[1%]' onSubmit={e => {e.preventDefault(); form.handleSubmit()}}>

        <form.Field name='email' validators={{
          onChangeAsyncDebounceMs: 500,
          onChangeAsync: ({value}) => {
            if (!email.test(value)){
              return `Please write a valid email`
            }
          }
        }} children={(field) => {
          return <><input className='outline-0 border-[0.2vw] border-white/10 rounded-[0.5vw] p-[2%] px-[3%] placeholder:text-[1.2vw] text-[1.2vw] bg-stone-950' type='email' name='' id='email'  placeholder='Email' value={field.state.value} onChange={e => {field.handleChange(e.target.value)}} />
            {field.state.meta.errors && <div className='text-red-500 text-[0.8vw] ml-[3%]'>
              {field.state.meta.errors}
            </div>}
          </>
        }} />

        <form.Field name='password' validators={{
          onChangeAsyncDebounceMs: 500,
          onChangeAsync: ({value}) => {
            if (value.length < 6){
              return `Password is too short`
            }
          }
        }} children={(field) => {
          return <><input className='outline-0 border-[0.2vw] border-white/10 rounded-[0.5vw] p-[2%] px-[3%] placeholder:text-[1.2vw] text-[1.2vw] bg-stone-950' type='password' name='' id='password'  placeholder='Password' value={field.state.value} onChange={e => {field.handleChange(e.target.value)}}/>
            {field.state.meta.errors && <div className='text-red-500 text-[0.8vw] ml-[3%]'>
              {field.state.meta.errors}
            </div>}
          </>
        }} />

        <div className='text-end text-[1vw] font-[Oswald] mt-[2%] font-light text-white/50 w-full flex justify-end' ><p className='cursor-pointer w-fit'>Forgot password ?</p></div>
        <button disabled={isLoading} type='submit' className=' disabled:bg-gray-800 disabled:hover:scale-100 bg-fuchsia-500 text-black rounded-[0.5vw] mt-[2%] p-[2.5%] font-[Oswald] font-bold text-[1.9vw] cursor-pointer sweep before:absolute overflow-hidden relative hover:scale-102 transition-all flex justify-center'>{isLoading ? <Loading /> : 'Log in'}</button>
        {error ? <p className='text-[1.3vw] text-red-500 font-light text-center w-full mt-[2%] font-[Oswald] tracking-wider'>{error}</p> : <></>}
      </form>
      <div className=' text-[1.2vw] font-[Oswald] font-light text-white/80 text-center mt-[5%]'>If you are here to start, <Link to='/auth/Signup' className='text-indigo-300 cursor-pointer font-medium'>Sign up.</Link></div>

    </div>

    

  </div>
}
