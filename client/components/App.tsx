import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <div className="flex flex-col relative min-h-screen bg-dd-dark-purple">
        <Header />
        <main className="flex grow justify-center">
          <div className="relative w-full max-w-6xl pt-[6.5rem] md:pt-[6rem] pr-5 md:pr-10 pl-5 md:pl-10 pb-10 md:pb-20">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
