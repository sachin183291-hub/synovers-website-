import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

// Mock auth — replace with real API calls in production
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('synovers-user')
    return stored ? JSON.parse(stored) : null
  })

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('synovers-user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('synovers-user')
  }

  const isAuthenticated = !!user
  const isAdmin = user?.role === 'admin'
  const isStudent = user?.role === 'student'

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin, isStudent }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
