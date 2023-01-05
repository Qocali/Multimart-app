import { useState } from 'react'
import Layout from './Components/Layout/Layout.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout/>
    </div>
  )
}

export default App
