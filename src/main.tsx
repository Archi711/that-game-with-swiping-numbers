import { render } from 'preact'
import { App } from './features/app'
import './index.css'

render(<App />, document.getElementById('app') as HTMLElement)
