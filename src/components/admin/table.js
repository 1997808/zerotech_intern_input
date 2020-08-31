import React from 'react'
import TableItem from './tableItem'

export default function Table(props) {
  const { data } = props

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Last Update</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item =>
          <TableItem item={item} />
        )}
      </tbody>
    </table>
    /* <div className="d-flex justify-content-center align-items-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button class="page-link" value={1} onClick={(event) => setPage(event.target.value)}>1</button></li>
          <li class="page-item"><button class="page-link" value={2} onClick={(event) => setPage(event.target.value)}>2</button></li>
          <li class="page-item"><button class="page-link" value={3} onClick={(event) => setPage(event.target.value)}>3</button></li>
        </ul>
      </nav>
    </div> */
  )
}