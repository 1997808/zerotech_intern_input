import React, { useState } from 'react'
import FormEnter from './formEnter'
import Filter from './filter'
import DataTable from './dataTable'

export default function FormReact(props) {
  const [data, setData] = useState([["Mark", "0943473", "Male"], ["King", "0234723482", "Female"]])
  // const [formData, setFormData] = useState([])
  const [fixData, setFixData] = useState([])
  const [addStatus, setAddStatus] = useState(true)

  const addNewData = (newData) => {
    setData([...data, newData])
  }

  const editRowData = (index) => {
    setAddStatus(false)
    setFixData(data[index])
  }

  const deleteRowData = (index) => {
    let remainData = [...data]
    remainData.splice(index, 1)
    setData(remainData)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <FormEnter addData={addNewData} editData={fixData} addStatus={addStatus} setAddStatus={setAddStatus} />
        </div>

        <div className="col-12">
          <Filter />
        </div>

        <div className="col-12">
          <DataTable data={data} editData={editRowData} deleteData={deleteRowData} />
        </div>
      </div>
    </div>
  )
}