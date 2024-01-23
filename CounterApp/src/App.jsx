import { useState } from 'react'
import Counter from './Counter'
import './App.css'

const App=()=>{
  const [count, setCount]=useState(1)
  return(
    <>
      <Counter countNumber={count} increment={()=>setCount(count+1)} decrement={()=>setCount(count-1)} />
    </>
  )
}
export default App



