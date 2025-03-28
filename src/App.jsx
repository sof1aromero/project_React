import { useState } from 'react'
import './App.css'
import CompOne from './components/CompOne'

function App() {
  const [count, setCount] = useState(0)

  return (
   <CompOne/>
  )
}

export default App
