import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import CartTable from './components/layout/CartTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CartTable />
      
    </>
  )
}

export default App
