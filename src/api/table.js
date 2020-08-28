import React from 'react'

export default function Table(props) {
  const { data } = props
  return (
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Excerpt</th>
          <th scope="col">Read time</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item =>
          <tr>
            <td><img src={item.feature_image} width={100} height={"auto"}></img></td>
            <td>{item.title}</td>
            <td>{item.excerpt}</td>
            <td>{item.reading_time}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}