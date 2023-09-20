import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <div className="relative min-h-screen bg-dd-dark-purple">
        <Header />
        <Nav />
        <main className="flex justify-center">
          <div className="w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
