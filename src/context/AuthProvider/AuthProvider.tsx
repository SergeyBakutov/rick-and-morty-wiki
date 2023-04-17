import { createContext, useContext, useState } from 'react'

interface IContextProps {
  user: string | null
  signIn: (newUser: string, callback: () => void) => void
  signOut: (callback: () => void) => void
}

const AuthContext = createContext<IContextProps>({
  user: null,
  signIn: () => undefined,
  signOut: () => undefined,
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState(
    () => localStorage.getItem('currentUser') || null
  )

  const signIn = (newUser: string, callback: () => void) => {
    setUser(newUser)
    localStorage.setItem('currentUser', newUser)
    callback()
  }

  const signOut = (callback: () => void) => {
    setUser(null)
    localStorage.removeItem('currentUser')
    callback()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
