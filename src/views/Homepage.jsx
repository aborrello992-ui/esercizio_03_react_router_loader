function Homepage() {
  return (
    <main className="page hero-page">
      <section className="hero-content">
        <p className="eyebrow">React Router</p>
        <h1 className="page-title">Single Page Application</h1>
        <p className="page-description">
          Questo progetto usa rotte annidate, loader, Context e custom hooks per
          navigare tra home, posts, dettaglio, login e registrazione.
        </p>
      </section>

      <section className="scroll-demo-section">
        <h2 className="scroll-demo-title">Custom hook useScroll</h2>
        <p className="scroll-demo-text">
          Scorrendo questa pagina, la navbar cambia stile grazie al custom hook
          `useScroll`.
        </p>
      </section>
    </main>
  )
}

export default Homepage
