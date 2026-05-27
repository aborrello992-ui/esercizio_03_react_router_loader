function RegisterView() {
  return (
    <main className="mx-auto w-11/12 max-w-xl pt-28 pb-16">
      <section className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-4xl text-primary">Register</h1>

          <form className="flex flex-col gap-5">
            <label className="form-control w-full" htmlFor="register-name">
              <span className="label-text mb-2 font-bold">Nome</span>
              <input
                className="input input-primary w-full"
                id="register-name"
                type="text"
                placeholder="Inserisci il tuo nome"
              />
            </label>

            <label className="form-control w-full" htmlFor="register-email">
              <span className="label-text mb-2 font-bold">Email</span>
              <input
                className="input input-primary w-full"
                id="register-email"
                type="email"
                placeholder="Inserisci la tua email"
              />
            </label>

            <label className="form-control w-full" htmlFor="register-password">
              <span className="label-text mb-2 font-bold">Password</span>
              <input
                className="input input-primary w-full"
                id="register-password"
                type="password"
                placeholder="Scegli una password"
              />
            </label>

            <button className="btn btn-primary w-fit" type="button">
              Registrati
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default RegisterView
