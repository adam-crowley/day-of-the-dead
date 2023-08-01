import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Day from './components/Day'
import Locations from './components/Locations'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="schedule/:day" element={<Day />} />
        <Route path="locations" element={<Locations />} />
      </Route>
    </>
  )
)

export default router
