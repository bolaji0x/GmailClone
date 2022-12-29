import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '../../components'
const SharedLayout = () => {
  return (
    <div className='homepage-container'>
        <Navbar />
        <Sidebar />
        <div className='dashboard-page'>
          <Outlet />
        </div>
    </div>
      
  )
}

export default SharedLayout
