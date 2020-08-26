import React from 'react'

export default function Filter(props) {
  return (
    <div className="form-group">
      <div className="d-flex" id="filterContainer" style={{ margin: "30px 0" }}>
        <input type="text" className="form-control col-4" id="InputFilter" onChange={() => console.log("filterChange()")}
          placeholder="Enter Something" />
        <button type="button" className="btn btn-primary col-1 offset-1" id="filterBtn">Filter</button>
        <button type="button" className="btn btn-primary col-2 offset-1" onClick={() => console.log("deleteAllRow()")}>Delete All</button>
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

        </tbody>
      </table>
    </div>
  )
}