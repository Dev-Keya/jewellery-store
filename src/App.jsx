import { StrictMode, useState } from 'react'
import Landingpage from './Landingpage'
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
      <Landingpage />
    </>
  )
}

export default App
