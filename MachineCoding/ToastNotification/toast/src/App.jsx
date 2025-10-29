import { useState } from 'react';
import ToastContainer from './Components/toactContainer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToastContainer />
    </>
  )
}

export default App
