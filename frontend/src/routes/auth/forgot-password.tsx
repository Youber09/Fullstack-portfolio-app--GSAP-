import { createFileRoute } from '@tanstack/react-router'
import Authentication from '../../components/Authentication'
import { useForm } from '@tanstack/react-form'
import { useAuthStore } from '../../store/authStore'
import Loading from '../../assets/svgs/Loading'

export const Route = createFileRoute('/auth/forgot-password')({
  component: RouteComponent,
})

function RouteComponent() {

  const {isLoading, forgotPassword, error} = useAuthStore() as {isLoading: boolean, forgotPassword: Function, error: any} 


  const form = useForm({
    defaultValues: {
      email: ``
    },
    onSubmit: async (value) => {
      await forgotPassword({email : value.value.email})
    }
  })

  const email = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  return <div className='flex relative overflow-hidden bg-black grid-bg w-full h-svh'>

    <Authentication />

    <div className='flex justify-center items-start w-[50vw] flex-col p-[10%] px-[5%] overflow-hidden'>

      <p className='text-[8vw]/[8vw] font-[Oswald] font-medium tracking-tighter'>Type your<br />email address</p>

      <form className=' w-full flex mt-[8%] flex-col' onSubmit={(e) => {e.preventDefault();form.handleSubmit()}}>

        

        <form.Field name='email' validators={{
          onChangeAsyncDebounceMs: 500,
          onChangeAsync: ({value}) => {
            if (!email.test(value)){
              return `Please write a valid email`
            }
          }
        }} children={(field) => {
          return <><input type="email" placeholder={`email`} className='w-full outline-0 border-[0.2vw] border-white/10 rounded-[0.5vw] p-[2%] px-[3%] placeholder:text-[1.2vw] text-[1.2vw] bg-stone-950' value={field.state.value} onChange={e => {field.handleChange(e.target.value)}} />
            {field.state.meta.errors && <div className='text-red-500 text-[0.8vw] ml-[3%]'>
              {field.state.meta.errors}
            </div>}
          </>
        }} />

        <button disabled={isLoading} type='submit' className='mt-[5%] disabled:bg-gray-800 disabled:hover:scale-100 bg-fuchsia-500 text-black rounded-[0.5vw] p-[2.5%] font-[Oswald] font-bold text-[1.9vw] cursor-pointer sweep before:absolute overflow-hidden relative hover:scale-102 transition-all flex justify-center'>{isLoading ? <Loading /> : 'Send'}</button>
        {error ? <p className='text-[1.3vw] text-red-500 font-light text-center w-full mt-[2%] font-[Oswald] tracking-wider'>{error}</p> : <></>}

      </form>

    </div>

  </div>
}