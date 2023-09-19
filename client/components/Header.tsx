import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex flex-wrap justify-center py-10 bg-dd-dark-purple bg-gradient-to-b from-transparent from-40% to-dd-light-purple/30">
      <Link to="/" className="flex w-6/12 header__link">
        <img
          src="/images/skull.png"
          alt="skull"
          className="self-center w-6/12 pr-10"
        />
        <h1 className="flex flex-col justify-center w-6/12 text-left font-serif italic text-7xl text-dd-yellow">
          Day of<br></br> the Dead<br></br>{' '}
          <span className="text-dd-gold">2024</span>
        </h1>
      </Link>
    </header>
  )
}

export default Header
