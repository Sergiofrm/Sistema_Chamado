import { useState, createContext, useEffect } from 'react'
import firebase from '../services/firebaseConnections'

// criar o context

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [user, setUser] = useState({ id: 1, name: 'Sergio' }) // ou pode inserir o (null)
  const [loadingAuth, setLoadingAuth] = useState(false)

  return (
    // O Sinal de Exclamação no value , retonar se é Boleano ou não

    <AuthContext.Provider value={{ signed: !!user, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
