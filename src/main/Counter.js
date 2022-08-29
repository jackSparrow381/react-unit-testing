import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <h1>Counter</h1>
        <h2 role={"alert"}>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

      
    </div>
  )
}

export default Counter
