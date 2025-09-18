import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { useAuthStore } from '../store/authStore'

export const Route = createFileRoute('/verification')({
  component: RouteComponent,
  beforeLoad: async () => {
  
      const {isCheckingAuth,checkAuth} = useAuthStore.getState() as {isAuthenticated : boolean, user: any,isCheckingAuth: boolean,checkAuth: Function}
      
  
      if (isCheckingAuth){
        await checkAuth()
      }
  
      const {isAuthenticated,user} = useAuthStore.getState() as {isAuthenticated : boolean, user: any,isCheckingAuth: boolean,checkAuth: Function}
  
  
  
      if (isAuthenticated && user.isVerified){
        throw redirect({to: '/'})
      }
  
    }
})

function RouteComponent() {
  return <div>
    <Outlet />
  </div>
}
