import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Day from './components/Day'
import Locations from './components/Locations'
import AddEvent from './components/AddEvent'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="schedule/:day" element={<Day />} />
        <Route path="locations" element={<Locations />} />
        <Route path="events/add/:day" element={<AddEvent />} />
      </Route>
    </>
  )
)

export default router
