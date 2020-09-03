import React from 'react'
import TableItem from './tableItem'

export default function Table(props) {
  const { data, setPage, pagination } = props

  const paging = []
  for (let i = 1; i < pagination + 1; i++) {
    paging.push(<li class="page-item" key={i}><button class="page-link" value={i} onClick={(event) => setPage(event.target.value)}>{i}</button></li>)
  }

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Last Update</th>
            <th scope="col">Checkbox</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item =>
            <TableItem item={item} key={item.id} />
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-center align-items-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {paging}
          </ul>
        </nav>
      </div>
    </>
  )
}