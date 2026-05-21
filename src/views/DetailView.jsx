import { Link, useLoaderData } from 'react-router-dom'

function DetailView() {
  const post = useLoaderData()

  return (
    <main className="page">
      <Link className="back-link" to="/posts">
        Torna ai post
      </Link>

      <article className="detail-card">
        <p className="post-id">Post #{post.id}</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="detail-body">{post.body}</p>
      </article>
    </main>
  )
}

export default DetailView
