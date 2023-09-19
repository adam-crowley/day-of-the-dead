import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="flex justify-center relative z-10 py-5 bg-dd-yellow">
      <ul className="flex text-center font-serif text-2xl">
        <li className="">
          <Link to="/schedule/friday" className="text-dd-dark-purple">
            Friday
          </Link>
        </li>
        <li>
          <Link to="/schedule/saturday">Saturday</Link>
        </li>
        <li>
          <Link to="/schedule/sunday">Sunday</Link>
        </li>
        <li className="absolute right-0">
          <Link className="nav" to="/locations">
            view locations
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
