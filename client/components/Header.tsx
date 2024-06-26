import { Link } from 'react-router-dom'

import Nav from './Nav'

function Header() {
  return (
    <header className="relative flex flex-wrap justify-center h-[13.5rem] sm:h-[23.25rem] pl-5 md:pl-0 pr-5 md:pr-0 py-10 bg-dd-dark-purple bg-gradient-to-b from-transparent from-40% to-dd-light-purple/30">
      <Link to="/" className="flex justify-center header__link">
        <img
          src="/images/skull.png"
          alt="skull"
          className="self-center w-[134px] sm:w-[300px] mr-4 sm:mr-6 md:mr-8"
        />
        <h1 className="flex flex-col justify-center text-left font-serif italic text-4xl sm:text-6xl md:text-7xl text-dd-yellow">
          Day of<br></br> the Dead<br></br>{' '}
          <span className="text-dd-gold">2024</span>
        </h1>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
