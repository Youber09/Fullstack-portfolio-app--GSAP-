import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { useAuthStore } from '../store/authStore'
import DropDown from '../assets/svgs/DropDown'
import Settigns from '../assets/svgs/Settigns'
import Logout from '../assets/svgs/Logout'
import Verify from '../assets/svgs/Verify'
import Loading from '../components/Loading'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Route = createRootRoute({
  component: RootComponent,
  
})

function RootComponent() {

  const {checkAuth,user,isAuthenticated,logout,isCheckingAuth} = useAuthStore() as {checkAuth : Function, isCheckingAuth : boolean,user: any,isAuthenticated: boolean, logout: Function}
  const [rotate,setRotate] = React.useState(false)

  React.useEffect(()=> {
    checkAuth()
  },[checkAuth])

  const LogoutHandle = async () => {

    try {
      await logout()
    } catch (error) {
      console.log(error)
    }

  }

  // useGSAP(async () => {

  //   const LoadingTL = gsap.timeline({

  //   })

  //   LoadingTL.to(`.LoadingText`,{
  //     y: `600%`,
  //     duration: 1,
  //     ease: `power3.in`,
  //     delay: .5
  //   }).to(`.LoadingAnimation`, {
  //     y: `-100%`,
  //     duration: 1,
  //     ease: `power3.in`
  //   })


    

  // },[isCheckingAuth])



  if (isCheckingAuth) return <Loading className='' className2='' />

  return (
    <React.Fragment>

        {/* <Loading className='LoadingAnimation' className2='LoadingText' /> */}
      
        <nav className='flex justify-between items-center p-[1%] px-[5%] h-[10%] border-b-1 border-white/0 relative bg-black grid-bg w-full top-0 z-20'>
            <button className='font-[Oswald] font-bold text-[clamp(1px,1.5vw,200px)] cursor-pointer crucks before:absolute relative'>Crucks</button>
            <div className='flex justify-between items-center w-[40%] border-[clamp(0.1px,0.1vw,400px)] border-white/20 rounded-full py-[0.2%] px-[2%] '>
                <Link to='/' className='font-sans font-medium border-1 hover:bg-primary border-white/0 transition-all duration-200 rounded-full my-[1%] py-[1%] px-[3%] cursor-pointer w-full mx-[2%] text-[clamp(1px,1vw,200px)] text-center'>Home</Link>   
                <button className='font-sans font-medium border-1 hover:bg-white/20 border-white/0 transition-all duration-200 rounded-full my-[1%] py-[1%] px-[3%] cursor-pointer w-full mx-[2%] text-[clamp(1px,1vw,200px)]'>Creator</button>
                <button className='font-sans font-medium border-1 hover:bg-white/20 border-white/0 transition-all duration-200 rounded-full my-[1%] py-[1%] px-[3%] cursor-pointer w-full mx-[2%] text-[clamp(1px,1vw,200px)]'>Discover</button>
            </div>
            

              {(user && isAuthenticated) ?

              <div className='flex items-center h-[4vw]'>

                <div className='relative' >
                  <p onClick={() => setRotate(rotate => {
                    return !rotate
                  })}  className={`  text-[1.2vw] font-[Oswald] font-normal tracking-wider border-white/20 border-[0.1vw] rounded-[0.3vw] py-[0.7vw] px-[20%] flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all active:scale-90 select-none max-w-[20vw] relative`}>
                    <p className='mr-[2vw] relative px-[1vw]'>{user.name}</p>
                    
                    <DropDown rotated={rotate} />
                  </p>

                  <ul className={`text-[1vw] font-medium flex flex-col space-y-[0.3vw] absolute bg-black/80 left-[50%] translate-x-[-50%] w-[15vw] py-[1vw] px-[2vw] rounded-[0.3vw]  transition-all ${rotate ? `` : `hidden`}`} >

                    <button className='flex justify-center'><p className='relative hover:bg-white/10 p-[10%] cursor-pointer transition-all rounded-[1vw] w-[8vw] group'><Settigns />Settings</p></button>
                    <button className='flex justify-center'><p className='relative hover:bg-white/10 p-[10%] cursor-pointer transition-all rounded-[1vw] w-[8vw]' onClick={() => {LogoutHandle();window.location.reload()}}><Logout />Log out</p></button>
                    {user.isVerified ? `` : <Link to={`/verification/verify-email`} className='flex justify-center'><p className='relative hover:bg-white/10 p-[10%] cursor-pointer transition-all rounded-[1vw] w-[8vw] flex justify-center'><Verify />Verify</p></Link>}

                  </ul>
                  
                </div> 

                </div>
                
                :

                <div className='flex items-center w-[15vw]'>
                  <Link to='/auth/Signup' className='font-sans font-medium p-[2%] px-[5%] w-[100%] bg-primary rounded-[clamp(1px,0.2vw,400px)] cursor-pointer transition-all duration-200 hover:bg-primary/80 mx-[2%] text-[clamp(1px,1vw,200px)] text-center'>Sign Up</Link>
                  <Link to='/auth/login' className='font-sans font-medium p-[2%] px-[5%] w-[100%] rounded-[clamp(1px,0.2vw,400px)] cursor-pointer transition-all duration-200 hover:bg-white/10 mx-[2%] text-[clamp(1px,1vw,200px)] text-center'>Log in</Link> 
                </div>
              }

                       
            
        </nav>
      <Outlet />
    </React.Fragment>
  )
}
