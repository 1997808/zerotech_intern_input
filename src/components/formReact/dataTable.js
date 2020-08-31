import React, { useState } from 'react'

export default function DataTable(props) {
  const { data, editData, deleteData, deleteAllRow } = props

  const [checkedRow, setCheckedRow] = useState([])

  const selectCheckedRow = (index) => {
    let rowArr = [...checkedRow]
    if (rowArr.includes(index)) {
      rowArr = rowArr.filter(item => item !== index)
    } else rowArr.push(index)

    setCheckedRow(rowArr)
  }

  const checkAllRow = () => {
    let rowArr = []
    let rowLength = data.length
    for (let i = 0; i < rowLength; i++) {
      rowArr.push(i)
    }
    setCheckedRow(rowArr)
  }

  const fixedCheckedRow = (i) => {
    let rowArr = [...checkedRow]
    let newRowArr = []
    rowArr = rowArr.filter(item => item !== i)

    rowArr.map(item => {
      if (item > i) {
        newRowArr.push(item - 1)
      } else newRowArr.push(item)
    })
    setCheckedRow(newRowArr)
  }

  const fixedDeleteAllRow = () => {
    setCheckedRow([])
  }

  return (
    <>
      <div className="d-flex" style={{ margin: "15px 0" }}>
        <button type="button" className="btn btn-primary col-1 offset-11" onClick={() => { deleteAllRow(checkedRow); fixedDeleteAllRow() }}>Delete</button>
      </div>
      <table className="table" id="PhoneBook">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Func</th>
            <th scope="col" onClick={() => checkAllRow()}>Check all</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>
                <button type="button" className="btn btn-success" onClick={() => editData(i)}><i className="fas fa-edit"></i></button>
                <button type="button" className="btn btn-danger" onClick={() => { deleteData(i); fixedCheckedRow(i) }}><i className="far fa-trash-alt"></i></button>
              </td>
              <td><input type="checkbox" aria-label="Checkbox for following text input" className="checkbox" onChange={() => selectCheckedRow(i)} checked={checkedRow.includes(i)} /></td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  )
}
