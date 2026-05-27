import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar bg-base-100 fixed top-0 z-10 px-6 shadow-sm transition-all">
      <div className="navbar-start">
        <NavLink className="btn btn-ghost text-lg" to="/">
          Home
        </NavLink>
      </div>

      <div className="navbar-center gap-2">
        <NavLink className="btn btn-ghost" to="/posts">
          Posts
        </NavLink>

        <NavLink className="btn btn-ghost" to="/login">
          Login
        </NavLink>

        <NavLink className="btn btn-ghost" to="/register">
          Register
        </NavLink>
      </div>

      <div className="navbar-end" />
    </nav>
  )
}

export default Navbar
