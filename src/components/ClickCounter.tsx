import React, { useState } from 'react'

const ClickCounter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter((p) => p + 1)}>{counter} </button>
    </div>
  )
}

export default ClickCounter
