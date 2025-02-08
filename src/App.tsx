import reactLogo from './assets/react.svg'
import './App.css'
import { Groceries } from './Groceries'
// import { Reducer } from './ReducerDemo'
// import { ColorPicker } from './ColorPicker'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <Groceries />
    </>
  )
}

export default App
