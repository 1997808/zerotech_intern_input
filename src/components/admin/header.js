import React from 'react'
import Sort from './sort'

export default function Header(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Posts</h2>
      <Sort />
    </div>
  )
}