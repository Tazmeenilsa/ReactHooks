import React,{ useContext} from 'react'

export default function Button() {
    const user = useContext();
  return (
    <div>
        <h1>Button</h1>
        <h1>Component 5</h1>
      <button>`{`Click Me ${user}`}</button>
    </div>
  )
}
