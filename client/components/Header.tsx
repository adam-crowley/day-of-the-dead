import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex flex-wrap justify-center bg-dd-dark-purple">
      <Link to="/" className="flex w-1/2">
        <img src="/images/skull.png" alt="skull" className="w-1/2" />
        <h1 className="flex flex-col justify-center w-1/2 text-left font-serif italic text-7xl text-dd-yellow">
          Day of<br></br> the Dead<br></br>{' '}
          <span className="text-dd-gold">2024</span>
        </h1>
      </Link>
    </header>
  )
}

export default Header
