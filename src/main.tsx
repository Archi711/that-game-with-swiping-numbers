import { render } from 'preact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './features/home'
import { RecoilRoot } from 'recoil'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
  , document.getElementById('app') as HTMLElement)
