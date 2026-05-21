import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  function registerUser(userData) {
    setUser(userData)
  }

  function logoutUser() {
    setUser(null)
  }

  const value = {
    logoutUser,
    registerUser,
    user,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUserContext() {
  return useContext(UserContext)
}
