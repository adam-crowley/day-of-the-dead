import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Nav />
          <main className="main-content">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
