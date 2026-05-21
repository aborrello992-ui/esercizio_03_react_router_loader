function LoginView() {
  return (
    <main className="page auth-page">
      <section className="auth-panel">
        <h1 className="page-title">Login</h1>

        <form className="auth-form">
          <div className="form-field">
            <label className="form-label" htmlFor="login-email">
              Email
            </label>
            <input
              className="form-input"
              id="login-email"
              type="email"
              placeholder="Inserisci la tua email"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="login-password">
              Password
            </label>
            <input
              className="form-input"
              id="login-password"
              type="password"
              placeholder="Inserisci la password"
            />
          </div>

          <button className="form-button" type="submit">
            Accedi
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginView
