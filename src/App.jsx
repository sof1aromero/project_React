import { useState } from 'react'
import './App.css'
import CompOne from './components/CompOne'
import CompTwo from './components/CompTwo'
import CompThree from './components/CompThree'
import CompFive from './components/CompFive'
import CompSix from './components/CompSix'
import CompSeven from './components/CompSeven'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <CompOne/>
   <CompTwo/>
   <CompThree/>
   <CompFive/>
   <CompSix/>
   <CompSeven/>
   </div>
  )
}

export default App
