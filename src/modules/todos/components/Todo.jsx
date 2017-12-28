import React from 'react'

export default ({ text, completed }) => (
  <li>
    <span>{ text }</span>
    <input type="checkbox" value={ completed }/>
  </li>
)