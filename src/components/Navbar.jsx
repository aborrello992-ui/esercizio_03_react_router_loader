import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/UserContext.jsx'
import useScroll from '../hooks/useScroll.js'

function Navbar() {
  const { logoutUser, user } = useUserContext()
  const { ref, scrollY } = useScroll()

  return (
    <nav ref={ref} className={scrollY > 0 ? 'navbar dark-navbar' : 'navbar'}>
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
