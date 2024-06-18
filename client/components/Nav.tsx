import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(true)
  const breakpoint = 768
  const isMobile = window.innerWidth <= breakpoint

  function handleClick() {
    setIsNavExpanded(!isNavExpanded)
  }

  function closeNav() {
    isMobile ? setIsNavExpanded(true) : null
  }

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth <= breakpoint
      setIsNavExpanded(isMobile)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="absolute flex justify-between md:justify-center w-full top-[13.5rem] sm:top-[23.25rem] z-10 py-2 md:py-3 pr-5 md:pr-10 pl-5 md:pl-10 bg-dd-yellow">
      <div className="nav__spacer"></div>
      <ul
        className={`nav__list ${
          !isNavExpanded ? 'nav__list--open' : 'nav__list--closed'
        }`}
      >
        <li className="mx-7 my-2 md:my-0">
          <Link
            onClick={closeNav}
            to="/schedule/friday"
            className="text-dd-dark-purple hover:text-dd-light-purple"
          >
            Friday
          </Link>
        </li>
        <li className="mx-7 my-2 md:my-0">
          <Link
            onClick={closeNav}
            to="/schedule/saturday"
            className="text-dd-dark-purple hover:text-dd-light-purple"
          >
            Saturday
          </Link>
        </li>
        <li className="mx-7 my-2 md:my-0">
          <Link
            onClick={closeNav}
            to="/schedule/sunday"
            className="text-dd-dark-purple hover:text-dd-light-purple"
          >
            Sunday
          </Link>
        </li>
        <li className="mx-7 my-2 md:my-0">
          <Link
            onClick={closeNav}
            to="/locations"
            className="text-dd-dark-purple hover:text-dd-light-purple"
          >
            Locations
          </Link>
        </li>
      </ul>
      <button className="nav__menu-btn my-2 md:my-0" onClick={handleClick}>
        {isNavExpanded ? (
          <>
            <span className="nav__menu-title">Menu</span>
            <svg className="nav__menu--open"></svg>
          </>
        ) : (
          <>
            <svg className="nav__menu--close"></svg>
          </>
        )}
      </button>
    </nav>
  )
}

export default Nav
