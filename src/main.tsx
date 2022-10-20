import { render } from 'preact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './features/home'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

render(
  <RouterProvider router={router} />
  , document.getElementById('app') as HTMLElement)
