import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/UserContext.jsx'
import useScroll from '../hooks/useScroll.js'

function Navbar() {
  const { logoutUser, user } = useUserContext()
  const { ref, scrollY } = useScroll()
  const navClass = scrollY > 0
    ? 'navbar dark-navbar fixed top-0 z-10 px-6 transition-all'
    : 'navbar bg-base-100 fixed top-0 z-10 px-6 shadow-sm transition-all'

  return (
    <nav ref={ref} className={navClass}>
      <div className="navbar-start">
        <NavLink className="btn btn-ghost text-lg" to="/">
          Home
        </NavLink>
      </div>

      <div className="navbar-center gap-2">
        {user && (
          <NavLink className="btn btn-ghost" to="/posts">
            Posts
          </NavLink>
        )}

        <NavLink className="btn btn-ghost" to="/login">
          Login
        </NavLink>
        <NavLink className="btn btn-ghost" to="/register">
          Register
        </NavLink>
      </div>

      <div className="navbar-end gap-3">
        {user && (
          <>
            <span className="font-bold">Ciao, {user.name}</span>
            <button className="btn btn-error btn-sm" type="button" onClick={logoutUser}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
