import React from 'react'

export default function DataTable(props) {
  const { data, editData, deleteData } = props

  return (
    <table class="table" id="PhoneBook">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Gender</th>
          <th scope="col">Func</th>
          <th scope="col" onclick="checkAllRow()">Check all</th>
        </tr>
      </thead>
      <tbody>
        {data, data.map((item, i) => (
          <tr>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <td>
              <button type="button" class="btn btn-success" onClick={() => editData(i)}><i
                class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger" onClick={() => deleteData(i)}>
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
            <td><input type="checkbox" aria-label="Checkbox for following text input" class="checkbox"
              onchange="checkRow(this)" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
