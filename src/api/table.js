import React from 'react'

export default function Table(props) {
  const { data, setPage } = props

  return (
    <>
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
      <div className="d-flex justify-content-center align-items-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {/* <li class="page-item"><button class="page-link">Previous</button></li> */}
            <li class="page-item"><button class="page-link" value={1} onClick={(event) => setPage(event.target.value)}>1</button></li>
            <li class="page-item"><button class="page-link" value={2} onClick={(event) => setPage(event.target.value)}>2</button></li>
            <li class="page-item"><button class="page-link" value={3} onClick={(event) => setPage(event.target.value)}>3</button></li>
            {/* <li class="page-item"><button class="page-link">Next</button></li> */}
          </ul>
        </nav>
      </div>
    </>
  )
}