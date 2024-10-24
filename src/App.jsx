import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TodoApp from './Todo';
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp/>
      </>
  )
}

export default App
