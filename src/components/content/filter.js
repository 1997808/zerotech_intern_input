import React, { useState } from 'react'

export default function Filter(props) {
  const { setSelectedValue, setOrderStatus, setFilter } = props
  const [filterText, setFilterText] = useState("")
  // const [filterData, setFilterData] = useState([])
  // const [selectedValue, setSelectedValue] = useState("")

  // const takeFilterData = (filter) => {
  //   fetch("http://145.239.255.230:2368/ghost/api/v3/content/posts/?key=c5af5cf4e8a3f121d54fa4e8bf&filter=title:'" + filter + "'")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         if (result.posts !== undefined) {
  //           setFilterData(result.posts)
  //         } else setFilterData([])
  //       },
  //       (error) => {
  //         console.log(error)
  //       }
  //     )
  // }

  // const sortOrderData = () => {
  //   fetch("http://145.239.255.230:2368/ghost/api/v3/content/posts/?key=c5af5cf4e8a3f121d54fa4e8bf&order=" + selectedValue)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         if (result.posts !== undefined) {
  //           setFilterData(result.posts)
  //         } else setFilterData([])
  //       },
  //       (error) => {
  //         console.log(error)
  //       }
  //     )
  //   console.log(filterData)
  // }

  return (
    <div className="form-group">
      <div className="d-flex" id="filterContainer" style={{ margin: "30px 0" }}>
        <input type="text" className="form-control col-4" id="InputFilter" onChange={(event) => setFilterText(event.target.value)} placeholder="Enter Something" />
        <button type="button" className="btn btn-primary col-1" onClick={() => setFilter(filterText)}>Filter</button>

        <select className="col-2 offset-1" onChange={event => setSelectedValue(event.target.value)}>
          <option value="default">Default</option>
          <option value="title ASC">Title</option>
          <option value="reading_time ASC">Read time</option>
        </select>
        <button type="button" className="btn btn-primary col-1" onClick={() => { setOrderStatus(true) }}>Sort</button>
      </div>
      {/* <table className="table" id="FilterTable">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Excerpt</th>
            <th scope="col">Read time</th>
          </tr>
        </thead>
        <tbody id="FilterTableBody">
          {filterData.map((item, i) => (
            <tr key={i}>
              <td><img src={item.feature_image} width={100} height={"auto"}></img></td>
              <td>{item.title}</td>
              <td>{item.excerpt}</td>
              <td>{item.reading_time}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}