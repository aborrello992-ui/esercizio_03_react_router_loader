import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/UserContext.jsx'

function Navbar() {
  const { logoutUser, user } = useUserContext()

  return (
    <nav className="navbar">
      <NavLink className="navbar-link" to="/">
        Home
      </NavLink>

      {user && (
        <NavLink className="navbar-link" to="/posts">
          Posts
        </NavLink>
      )}

      <NavLink className="navbar-link" to="/login">
        Login
      </NavLink>
      <NavLink className="navbar-link" to="/register">
        Register
      </NavLink>

      {user && (
        <>
          <span className="navbar-user">Ciao, {user.name}</span>
          <button className="logout-button" type="button" onClick={logoutUser}>
            Logout
          </button>
        </>
      )}
    </nav>
  )
}

export default Navbar
