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
    <main className="mx-auto w-11/12 max-w-xl pt-28 pb-16">
      <section className="card bg-base-100 shadow-sm">
        <div className="card-body">
        <h1 className="card-title text-4xl text-primary">Register</h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <label className="form-control w-full" htmlFor="register-name">
            <span className="label-text mb-2 font-bold">Nome</span>
            <input
              className="input input-primary w-full"
              id="register-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Inserisci il tuo nome"
              required
            />
          </label>

          <label className="form-control w-full" htmlFor="register-email">
            <span className="label-text mb-2 font-bold">Email</span>
            <input
              className="input input-primary w-full"
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Inserisci la tua email"
              required
            />
          </label>

          <label className="form-control w-full" htmlFor="register-password">
            <span className="label-text mb-2 font-bold">Password</span>
            <input
              className="input input-primary w-full"
              id="register-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Scegli una password"
              required
            />
          </label>

          <button className="btn btn-primary w-fit" type="submit">
            Registrati
          </button>
        </form>

        {user && (
          <div className="alert alert-success mt-6 block">
            <h2 className="font-bold">Utente registrato</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
        </div>
      </section>
    </main>
  )
}

export default RegisterView
