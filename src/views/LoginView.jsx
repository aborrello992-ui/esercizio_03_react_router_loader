import { useForm } from 'react-hook-form'

function LoginView() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log('Dati login:', data)
    reset()
  }

  return (
    <main className="mx-auto w-11/12 max-w-xl pt-28 pb-16">
      <section className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-4xl text-primary">Login</h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full" htmlFor="login-email">
              <span className="label-text mb-2 font-bold">Email</span>
              <input
                className="input input-primary w-full"
                id="login-email"
                type="email"
                placeholder="Inserisci la tua email"
                {...register('email', {
                  required: 'La email e obbligatoria',
                  maxLength: {
                    value: 50,
                    message: 'La email puo contenere al massimo 50 caratteri',
                  },
                })}
              />
              {errors.email && (
                <span className="mt-2 text-sm text-error">{errors.email.message}</span>
              )}
            </label>

            <label className="form-control w-full" htmlFor="login-password">
              <span className="label-text mb-2 font-bold">Password</span>
              <input
                className="input input-primary w-full"
                id="login-password"
                type="password"
                placeholder="Inserisci la password"
                {...register('password', {
                  required: 'La password e obbligatoria',
                  maxLength: {
                    value: 50,
                    message: 'La password puo contenere al massimo 50 caratteri',
                  },
                })}
              />
              {errors.password && (
                <span className="mt-2 text-sm text-error">
                  {errors.password.message}
                </span>
              )}
            </label>

            <button className="btn btn-primary w-fit" type="submit">
              Accedi
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default LoginView
