import { Link, useLoaderData } from 'react-router-dom'

function PostsView() {
  const posts = useLoaderData()

  return (
    <main className="mx-auto w-11/12 max-w-5xl pt-28 pb-16">
      <h1 className="mb-8 text-5xl font-bold text-primary">Posts</h1>

      <section className="grid gap-5">
        {posts.slice(0, 5).map((post) => (
          <article className="card bg-base-100 shadow-sm" key={post.id}>
            <div className="card-body">
              <h2 className="card-title capitalize">{post.title}</h2>
              <p className="text-base-content/70">{post.body}</p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" to={`/posts/${post.id}`}>
                  Leggi dettaglio
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default PostsView
