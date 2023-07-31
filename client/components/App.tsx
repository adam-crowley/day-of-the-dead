import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'

const App = () => {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Nav />
          <h1>Hello!</h1>
        </div>
      </div>
    </>
  )
}

export default App
