import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './signin.css'
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/auth'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, LoadingAuth } = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault()

    if (email !== '' && password !== '') {
      signIn(email, password)
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Sistema de login" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">
            {LoadingAuth ? 'Carregando...' : 'Acessar'}
          </button>
        </form>
        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  )
}

export default SignIn
