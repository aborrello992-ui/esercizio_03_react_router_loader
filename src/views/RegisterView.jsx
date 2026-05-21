function RegisterView() {
  return (
    <main className="page auth-page">
      <section className="auth-panel">
        <h1 className="page-title">Register</h1>

        <form className="auth-form">
          <div className="form-field">
            <label className="form-label" htmlFor="register-name">
              Nome
            </label>
            <input
              className="form-input"
              id="register-name"
              type="text"
              placeholder="Inserisci il tuo nome"
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
              placeholder="Inserisci la tua email"
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
              placeholder="Scegli una password"
            />
          </div>

          <button className="form-button" type="submit">
            Registrati
          </button>
        </form>
      </section>
    </main>
  )
}

export default RegisterView
