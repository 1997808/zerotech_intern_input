import React, { useState } from 'react'

export default function Filter(props) {
  const { filterData, takeFilterData } = props
  const [filter, setFilter] = useState("")

  return (
    <div className="form-group">
      <div className="d-flex" id="filterContainer" style={{ margin: "30px 0" }}>
        <input type="text" className="form-control col-4" id="InputFilter" onChange={(event) => setFilter(event.target.value)} value={filter} placeholder="Enter Something" />
        <button type="button" className="btn btn-primary col-1 offset-1" onClick={() => takeFilterData(filter)}>Filter</button>
      </div>
      <table className="table" id="FilterTable">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Func</th>
          </tr>
        </thead>
        <tbody id="FilterTableBody">
          {filterData.map((item, i) => (
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}