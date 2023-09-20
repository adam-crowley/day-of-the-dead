import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="flex justify-center relative z-10 py-3 bg-dd-yellow">
      <ul className="flex text-center font-serif text-2xl">
        <li className="mx-7">
          <Link
            to="/schedule/friday"
            className="text-dd-dark-purple hover:text-dd-light-purple"
          >
            Friday
          </Link>
        </li>
        <li className="mx-7">
          <Link
            to="/schedule/saturday"
            className="text-dd-dark-purple hover:text-dd-light-purple"
          >
            Saturday
          </Link>
        </li>
        <li className="mx-7">
          <Link
            to="/schedule/sunday"
            className="text-dd-dark-purple hover:text-dd-light-purple"
          >
            Sunday
          </Link>
        </li>
        <li className="mx-7">
          <Link
            to="/locations"
            className="text-dd-dark-purple hover:text-dd-light-purple"
          >
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
