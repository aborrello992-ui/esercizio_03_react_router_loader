import { useForm } from 'react-hook-form'
import { useUserContext } from '../context/UserContext.jsx'

function RegisterView() {
  const { registerUser, user } = useUserContext()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    registerUser({
      email: data.email,
      name: data.name,
    })

    reset()
  }

  return (
    <main className="mx-auto w-11/12 max-w-xl pt-28 pb-16">
      <section className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-4xl text-primary">Register</h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full" htmlFor="register-name">
              <span className="label-text mb-2 font-bold">Nome</span>
              <input
                className="input input-primary w-full"
                id="register-name"
                type="text"
                placeholder="Inserisci il tuo nome"
                {...register('name', {
                  required: 'Il nome e obbligatorio',
                  maxLength: {
                    value: 50,
                    message: 'Il nome puo contenere al massimo 50 caratteri',
                  },
                })}
              />
              {errors.name && (
                <span className="mt-2 text-sm text-error">{errors.name.message}</span>
              )}
            </label>

            <label className="form-control w-full" htmlFor="register-email">
              <span className="label-text mb-2 font-bold">Email</span>
              <input
                className="input input-primary w-full"
                id="register-email"
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

            <label className="form-control w-full" htmlFor="register-password">
              <span className="label-text mb-2 font-bold">Password</span>
              <input
                className="input input-primary w-full"
                id="register-password"
                type="password"
                placeholder="Scegli una password"
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
