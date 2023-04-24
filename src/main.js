import './style.css'
import { worker } from './worker'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div id="svg">
  </div>
`

worker.onmessage = (({ data }) => {
  document.querySelector('#svg').innerHTML = data
})
