import { useState } from 'react'
import { useUserContext } from '../context/UserContext.jsx'

function RegisterView() {
  const { registerUser, user } = useUserContext()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    registerUser({
      email: email,
      name: name,
    })

    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <main className="page auth-page">
      <section className="auth-panel">
        <h1 className="page-title">Register</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="register-name">
              Nome
            </label>
            <input
              className="form-input"
              id="register-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Inserisci il tuo nome"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="register-email">
              Email
            </label>
            <input
              className="form-input"
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Inserisci la tua email"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="register-password">
              Password
            </label>
            <input
              className="form-input"
              id="register-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Scegli una password"
              required
            />
          </div>

          <button className="form-button" type="submit">
            Registrati
          </button>
        </form>

        {user && (
          <div className="registered-card">
            <h2 className="registered-title">Utente registrato</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default RegisterView
