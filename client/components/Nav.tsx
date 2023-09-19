import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="bg-dd-yellow">
      <Link to="/schedule/friday">friday</Link>
      <Link to="/schedule/saturday">saturday</Link>
      <Link to="/schedule/sunday">sunday</Link>
      <Link className="nav" to="/locations">
        view locations
      </Link>
    </nav>
  )
}

export default Nav
