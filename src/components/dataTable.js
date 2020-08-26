import React from 'react'

export default function DataTable(props) {
  const { data, editData, deleteData } = props

  return (
    <table className="table" id="PhoneBook">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Gender</th>
          <th scope="col">Func</th>
          <th scope="col" onClick={() => console.log("checkAllRow()")}>Check all</th>
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
              <button type="button" className="btn btn-danger" onClick={() => deleteData(i)}><i className="far fa-trash-alt"></i></button>
            </td>
            <td><input type="checkbox" aria-label="Checkbox for following text input" className="checkbox" onChange={() => console.log("checkRow(this)")} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
