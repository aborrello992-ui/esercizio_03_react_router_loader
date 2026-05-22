import { Link, useLoaderData } from 'react-router-dom'

function DetailView() {
  const post = useLoaderData()

  return (
    <main className="mx-auto w-11/12 max-w-5xl pt-28 pb-16">
      <Link className="btn btn-ghost mb-6" to="/posts">
        Torna ai post
      </Link>

      <article className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <p className="font-bold text-base-content/60">Post #{post.id}</p>
          <h1 className="text-4xl font-bold text-primary capitalize">{post.title}</h1>
          <p className="text-lg leading-relaxed text-base-content/70">{post.body}</p>
        </div>
      </article>
    </main>
  )
}

export default DetailView
