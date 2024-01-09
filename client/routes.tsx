import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import App from './components/App'
import Day from './components/Day'
import Locations from './components/Locations'
import AddEvent from './components/AddEvent'
import EditEvent from './components/EditEvent'
import EditLocation from './components/EditLocation'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/schedule/friday" />} />
      <Route path="/" element={<App />}>
        <Route path="schedule/:day" element={<Day />} />
        <Route path="locations" element={<Locations />} />
        <Route path="locations/:id/edit" element={<EditLocation />} />
        <Route path="events/add/:day" element={<AddEvent />} />
        <Route path="events/:id/edit" element={<EditEvent />} />
      </Route>
    </>
  )
)

export default router
