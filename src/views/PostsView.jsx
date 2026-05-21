import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'

function PostsView() {
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <main className="page">
      <h1 className="page-title">Posts</h1>

      <section className="posts-grid">
        {posts.slice(0, 5).map((post) => (
          <article className="post-card" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <Link className="button-link" to={`/posts/${post.id}`}>
              Leggi dettaglio
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}

export default PostsView
