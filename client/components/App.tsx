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
          <div className="w-full max-w-6xl pt-10 md:pt-16 pr-5 md:pr-10 pl-5 md:pl-10 pb-28">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
