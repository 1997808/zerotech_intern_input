import React from 'react'

export default function Filter(props) {
  return (
    <div class="form-group">
      <div class="d-flex" id="filterContainer" style={{ margin: "30px 0" }}>
        <input type="text" class="form-control col-4" id="InputFilter" onchange="filterChange()"
          placeholder="Enter Something" />
        <button type="button" class="btn btn-primary col-1 offset-1" id="filterBtn">Filter</button>
        <button type="button" class="btn btn-primary col-2 offset-1" onclick="deleteAllRow()">Delete All</button>
      </div>
      <table class="table" id="FilterTable">
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