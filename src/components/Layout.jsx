import { useLocation } from 'react-router-dom'

import {Outlet, Link} from 'react-router-dom'

function Layout() {
  const location = useLocation();
  const urlNow = location.pathname;


  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-900 px5 py-10'>
          <h2 className='text-4xl font-black text-center text-white'>CRM - Clients</h2>
          <nav className='mt-10'>
              <Link to='/' className={`${urlNow === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}>Clients</Link>
              <Link to='/clients/new' className={`${urlNow === '/clients/new' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}>New Client</Link>
          </nav>
      </aside>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet />
      </main>
    </div>
  )
}

export default Layout