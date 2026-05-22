function Homepage() {
  return (
    <main className="mx-auto flex min-h-[140vh] w-11/12 max-w-5xl flex-col justify-center gap-28 pt-28 pb-16">
      <section className="hero rounded-lg bg-base-100 shadow-sm">
        <div className="hero-content max-w-3xl items-start text-left">
          <div>
            <p className="mb-3 font-bold uppercase text-primary">React Router</p>
            <h1 className="mb-5 text-5xl font-bold text-primary">
              Single Page Application
            </h1>
            <p className="text-xl leading-relaxed text-base-content/70">
              Questo progetto usa rotte annidate, loader, Context e custom hooks per
              navigare tra home, posts, dettaglio, login e registrazione.
            </p>
          </div>
        </div>
      </section>

      <section className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-2xl">Custom hook useScroll</h2>
          <p className="text-base-content/70">
            Scorrendo questa pagina, la navbar cambia stile grazie al custom hook
            <code className="mx-1 rounded bg-base-200 px-2 py-1">useScroll</code>.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Homepage
