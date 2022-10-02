import React from 'react'
import Button from './div/Button'

export default function Div(props) {
  return (
    <div>
        <h1>Div Page</h1>
        <Button name={props.name} />
    </div>
  )
}
