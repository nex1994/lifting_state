import reactLogo from './assets/react.svg'
import './App.css'
import { Party } from './Party/Party'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <Party />
    </>
  )
}

export default App
