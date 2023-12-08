import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(true)

  function handleClick() {
    setIsNavExpanded(!isNavExpanded)
    console.log('isNavExpanded', isNavExpanded)
  }

  return (
    <nav className="flex justify-center relative z-10 py-3 bg-dd-yellow">
      <ul
        className={`nav__list ${
          !isNavExpanded ? 'nav__list--open' : 'nav__list--closed'
        }`}
      >
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
      <button className="h-8 w-8 nav__menu-btn" onClick={handleClick}>
        {isNavExpanded ? (
          <svg className="nav__menu--open"></svg>
        ) : (
          <svg className="nav__menu--close"></svg>
        )}
      </button>
    </nav>
  )
}

export default Nav
