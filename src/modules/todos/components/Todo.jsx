import React from 'react'

export default ({ text, completed }) => (
  <li>
    <input type="checkbox" value={ completed }/>
    <span>{ text }</span>
  </li>
)
