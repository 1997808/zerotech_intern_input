import React from 'react'

export default function TableItem(props) {
  const { item } = props
  return (
    <tr>
      <td>
        <p style={{ fontWeight: 600, margin: 0 }}>{item.title}</p>
        <p style={{ fontSize: "12px", margin: 0 }}>{"By " + item.authors[0].name + " in " + item.tags[0].name}</p>
      </td>
      <td><p style={{ display: "inline-block", background: "#ddd", color: "#666", padding: "2px", fontWeight: 600, fontSize: "12px", margin: 0 }}>{item.status.toUpperCase()}</p></td>
      <td>{Math.round((Date.now() - Date.parse(item.updated_at)) / 86400000) + " days ago"}</td>
    </tr>
  )
}
