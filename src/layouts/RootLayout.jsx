import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function RootLayout() {
  return (
    <div className='flex flex-col justify-between h-screen w-full'>    
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}