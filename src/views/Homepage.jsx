function Homepage() {
  return (
    <main className="mx-auto flex min-h-[140vh] w-11/12 max-w-5xl flex-col justify-center gap-28 pt-28 pb-16">
      <section className="hero rounded-lg bg-base-100 shadow-sm">
        <div className="hero-content max-w-3xl items-start text-left">
          <div>
            <p className="mb-3 font-bold uppercase text-primary">React Router</p>
            <h1 className="mb-5 text-5xl font-bold text-primary">
              Selfwork React Router
            </h1>
            <p className="text-xl leading-relaxed text-base-content/70">
              In questa esercitazione usiamo una rotta principale con Layout,
              rotte figlie annidate e i loader di React Router per recuperare i
              dati prima del rendering delle pagine.
            </p>
          </div>
        </div>
      </section>

      <section className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-2xl">Obiettivo della consegna</h2>
          <p className="text-base-content/70">
            La struttura prevede una homepage, una vista con la lista dei post,
            una vista di dettaglio e due pagine dedicate ai form di login e
            registrazione, visibili ma senza logica di submit.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Homepage
