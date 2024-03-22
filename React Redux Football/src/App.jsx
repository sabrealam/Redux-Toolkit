import { useState } from 'react' 
import './App.css'
import Football from './Football'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Football/>
    </>
  )
}

export default App
