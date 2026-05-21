import { createElement } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import DetailView from '../views/DetailView.jsx'
import Homepage from '../views/Homepage.jsx'
import LoginView from '../views/LoginView.jsx'
import PostsView from '../views/PostsView.jsx'
import RegisterView from '../views/RegisterView.jsx'

async function detailLoader({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  )

  if (!response.ok) {
    throw new Error('Errore durante il caricamento del dettaglio')
  }

  return response.json()
}

const router = createBrowserRouter([
  {
    path: '/',
    element: createElement(Layout),
    children: [
      {
        index: true,
        element: createElement(Homepage),
      },
      {
        path: 'posts',
        element: createElement(PostsView),
      },
      {
        path: 'posts/:postId',
        element: createElement(DetailView),
        loader: detailLoader,
      },
      {
        path: 'login',
        element: createElement(LoginView),
      },
      {
        path: 'register',
        element: createElement(RegisterView),
      },
    ],
  },
])

export default router
