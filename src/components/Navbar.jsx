import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar-link" to="/">
        Home
      </NavLink>
      <NavLink className="navbar-link" to="/posts">
        Posts
      </NavLink>
      <NavLink className="navbar-link" to="/login">
        Login
      </NavLink>
      <NavLink className="navbar-link" to="/register">
        Register
      </NavLink>
    </nav>
  )
}

export default Navbar
